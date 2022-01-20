export interface Monster {
    boss: boolean;
    buffs?: any[];
    canDispell?: boolean;
    debuffs?: string[];
    drops: any[];
    id: number;
    image: string;
    level?: number;
    name: string;
    skills: any[];
    spawns?: string[];
    tier: number;
    vulnerable_to_status?: string[];
}
