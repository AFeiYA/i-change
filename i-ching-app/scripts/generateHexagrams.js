const fs = require('fs');
const path = require('path');

// 读取CSV文件并正确解析（处理引号内的逗号）
function readCSV(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n').filter(line => line.trim());
    const headers = parseCSVLine(lines[0]);
    
    return lines.slice(1).map(line => {
        const values = parseCSVLine(line);
        const obj = {};
        headers.forEach((header, index) => {
            obj[header] = values[index] || '';
        });
        return obj;
    });
}

// 解析CSV行，正确处理引号内的逗号
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    
    result.push(current.trim());
    return result;
}

// 中文名称到英文名称的映射
const englishNames = {
    "乾": "The Creative",
    "坤": "The Receptive", 
    "屯": "Difficulty at the Beginning",
    "蒙": "Youthful Folly",
    "需": "Waiting",
    "讼": "Conflict",
    "师": "The Army",
    "比": "Holding Together",
    "小畜": "Small Taming Power",
    "履": "Treading",
    "泰": "Peace",
    "否": "Standstill",
    "同人": "Fellowship",
    "大有": "Great Possession",
    "谦": "Modesty",
    "豫": "Enthusiasm",
    "随": "Following", 
    "蛊": "Work on the Decayed",
    "临": "Approach",
    "观": "Contemplation",
    "噬嗑": "Biting Through",
    "贲": "Grace",
    "剥": "Splitting Apart",
    "复": "Return",
    "无妄": "Innocence",
    "大畜": "Great Taming Power",
    "颐": "Nourishment",
    "大过": "Great Exceeding",
    "坎": "The Abysmal Water",
    "离": "The Clinging Fire",
    "咸": "Influence",
    "恒": "Duration",
    "遁": "Retreat",
    "大壮": "Great Power",
    "晋": "Progress",
    "明夷": "Darkening of the Light",
    "家人": "The Family",
    "睽": "Opposition",
    "蹇": "Obstruction",
    "解": "Deliverance",
    "损": "Decrease",
    "益": "Increase",
    "夬": "Breakthrough",
    "姤": "Coming to Meet",
    "萃": "Gathering Together",
    "升": "Pushing Upward",
    "困": "Oppression",
    "井": "The Well",
    "革": "Revolution",
    "鼎": "The Cauldron",
    "震": "The Arousing Thunder",
    "艮": "Keeping Still Mountain",
    "渐": "Development",
    "归妹": "The Marrying Maiden",
    "丰": "Abundance",
    "旅": "The Wanderer",
    "巽": "The Gentle Wind",
    "兑": "The Joyous Lake",
    "涣": "Dispersion",
    "节": "Limitation",
    "中孚": "Inner Truth",
    "小过": "Small Exceeding",
    "既济": "After Completion",
    "未济": "Before Completion"
};

// 生成TypeScript代码
function generateTypeScriptCode(csvData) {
    let code = `export interface Hexagram {
  number: number;
  name: string;
  chineseName: string;
  description: string;  lines: string[];
  unicode: string;
  interpretation: string;
  advice: string;
  trigrams: {
    upper: string;
    lower: string;
  };
  oppositeHexagram: string;
  reverseHexagram: string;
  nuclearHexagram: string;
  lineTexts: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
    line6: string;
  };
}

// 将二进制码转换为线条数组的辅助函数
function convertBinaryToLines(binary: string): string[] {
  return binary.split('').map(bit => bit === '1' ? '---' : '- -');
}

// 中文名称到英文名称的映射
const englishNames: { [key: string]: string } = {
`;

    // 添加英文名称映射
    Object.entries(englishNames).forEach(([chinese, english]) => {
        code += `    "${chinese}": "${english}",\n`;
    });

    code += `};

export const hexagrams: Hexagram[] = [
`;    // 生成每个卦象的数据
    csvData.forEach((row, index) => {
        const chineseName = row['卦名'] || '';
        const englishName = englishNames[chineseName] || chineseName;
        
        // 安全地转义字符串中的引号
        const escapeString = (str) => str.replace(/'/g, "\\'").replace(/"/g, '\\"');
        
        code += `  {\n`;
        code += `    number: ${row['序号']},\n`;
        code += `    name: '${escapeString(englishName)}',\n`;
        code += `    chineseName: '${escapeString(chineseName)}',\n`;
        code += `    description: '${escapeString(row['卦辞'] || '')}',\n`;
        code += `    lines: convertBinaryToLines('${row['二进制码'] || ''}'),\n`;
        code += `    unicode: '${row['Unicode符号'] || ''}',\n`;
        code += `    interpretation: '${escapeString(row['象征解释'] || '')}',\n`;
        code += `    advice: '${escapeString(row['人生建议'] || '')}',\n`;
        code += `    trigrams: {\n`;
        code += `      upper: '${escapeString(row['上卦'] || '')}',\n`;
        code += `      lower: '${escapeString(row['下卦'] || '')}'\n`;
        code += `    },\n`;
        code += `    oppositeHexagram: '${escapeString(row['错卦'] || '')}',\n`;
        code += `    reverseHexagram: '${escapeString(row['综卦'] || '')}',\n`;
        code += `    nuclearHexagram: '${escapeString(row['互卦'] || '')}',\n`;
        code += `    lineTexts: {\n`;
        code += `      line1: '${escapeString(row['初爻辞'] || '')}',\n`;
        code += `      line2: '${escapeString(row['二爻辞'] || '')}',\n`;
        code += `      line3: '${escapeString(row['三爻辞'] || '')}',\n`;
        code += `      line4: '${escapeString(row['四爻辞'] || '')}',\n`;
        code += `      line5: '${escapeString(row['五爻辞'] || '')}',\n`;
        code += `      line6: '${escapeString(row['上爻辞'] || '')}'\n`;
        code += `    }\n`;
        code += `  }`;
        
        if (index < csvData.length - 1) {
            code += ',';
        }
        code += '\n';
    });

    code += '];';
    
    return code;
}

// 主函数
function main() {
    try {        // 读取CSV文件
        const csvPath = path.join(__dirname, '../src/data/hexagrams.csv');
        const csvData = readCSV(csvPath);
        
        console.log(`读取到 ${csvData.length} 个卦象数据`);
        
        // 生成TypeScript代码
        const tsCode = generateTypeScriptCode(csvData);
        
        // 写入文件
        const outputPath = path.join(__dirname, '../src/data/hexagrams.ts');
        fs.writeFileSync(outputPath, tsCode, 'utf-8');
        
        console.log(`成功生成 ${outputPath}`);
        console.log('代码生成完成！');
        
    } catch (error) {
        console.error('生成失败:', error.message);
    }
}

// 运行主函数
main();
