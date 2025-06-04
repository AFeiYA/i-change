// 音效系统工具类
export class SoundEffects {
    static audioContext: AudioContext | null = null;
    static enabled = true;    static setEnabled(enabled: boolean) {
        this.enabled = enabled;
    }

    static isEnabled(): boolean {
        return this.enabled;
    }

    static getAudioContext(): AudioContext {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        return this.audioContext;
    }

    // 创建基础音调
    static createTone(frequency: number, duration: number, type: OscillatorType = 'sine'): void {
        if (!this.enabled) return;

        try {
            const ctx = this.getAudioContext();
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            oscillator.frequency.value = frequency;
            oscillator.type = type;

            // 音量包络
            gainNode.gain.setValueAtTime(0, ctx.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + duration);
        } catch (error) {
            console.warn('无法播放音效:', error);
        }
    }

    // 硬币投掷音效
    static playCoinFlip(): void {
        if (!this.enabled) return;
        
        // 模拟硬币旋转的音效
        const frequencies = [800, 600, 700, 500];        frequencies.forEach((freq, index) => {
            setTimeout(() => {
                this.createTone(freq, 0.1, 'square');
            }, index * 50);
        });
    }

    // 占卜完成音效
    static playDivinationComplete(): void {
        if (!this.enabled) return;
        
        // 升调序列，表示完成
        const melody = [523, 659, 784, 1047]; // C5, E5, G5, C6
        melody.forEach((freq, index) => {
            setTimeout(() => {
                this.createTone(freq, 0.3, 'sine');
            }, index * 150);
        });
    }

    // 按钮点击音效
    static playClick(): void {
        if (!this.enabled) return;
        this.createTone(1000, 0.1, 'square');
    }

    // 变爻特殊音效
    static playChangingLine(): void {
        if (!this.enabled) return;
        
        // 神秘的变化音效
        setTimeout(() => this.createTone(400, 0.2, 'sawtooth'), 0);
        setTimeout(() => this.createTone(600, 0.2, 'sawtooth'), 100);
        setTimeout(() => this.createTone(800, 0.3, 'sine'), 200);
    }

    // 错误音效
    static playError(): void {
        if (!this.enabled) return;
        
        // 低频警告音
        this.createTone(200, 0.5, 'sawtooth');
    }

    // 成功音效
    static playSuccess(): void {
        if (!this.enabled) return;
        
        // 清脆的成功音
        this.createTone(800, 0.2, 'sine');
        setTimeout(() => this.createTone(1000, 0.3, 'sine'), 100);
    }

    // 蓍草占卜音效（更庄重）
    static playYarrowStalks(): void {
        if (!this.enabled) return;
        
        // 低频庄重音效
        const frequencies = [220, 247, 262, 294]; // A3, B3, C4, D4
        frequencies.forEach((freq, index) => {
            setTimeout(() => {
                this.createTone(freq, 0.4, 'triangle');
            }, index * 200);
        });
    }

    // 页面切换音效
    static playPageTransition(): void {
        if (!this.enabled) return;
        this.createTone(660, 0.15, 'sine');
    }
}

// React Hook for sound effects
import { useCallback } from 'react';

export const useSoundEffects = () => {
    const playSound = useCallback((soundType: keyof typeof SoundEffects) => {
        if (typeof SoundEffects[soundType] === 'function') {
            (SoundEffects[soundType] as Function)();
        }
    }, []);

    return {
        playClick: () => SoundEffects.playClick(),
        playCoinFlip: () => SoundEffects.playCoinFlip(),
        playDivinationComplete: () => SoundEffects.playDivinationComplete(),
        playChangingLine: () => SoundEffects.playChangingLine(),
        playError: () => SoundEffects.playError(),
        playSuccess: () => SoundEffects.playSuccess(),
        playYarrowStalks: () => SoundEffects.playYarrowStalks(),
        playPageTransition: () => SoundEffects.playPageTransition(),
        setEnabled: SoundEffects.setEnabled,
        isEnabled: SoundEffects.isEnabled
    };
};
