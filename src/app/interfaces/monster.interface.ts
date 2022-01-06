export interface Monster {
    boss: boolean;
    buffs?: any[];
    debuffs?: string[];
    drops: any[];
    id: number;
    image: string;
    level?: number;
    name: string;
    skillDetails?: any[];
    skills: any[];
    spawns?: string[];
    tier: number;
    vulnerable_to_status?: string[];
}
