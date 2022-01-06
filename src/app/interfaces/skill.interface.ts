export interface Skill {
    name: string;
    id: number;
    tier: number;
    type: string;
    description: string;
    is_magic: boolean;
    bought: boolean;
    mana_cost: boolean;
    causes: string[];
    gives: string[];
    learned_by: any[];
    monsters_use: any[];
}
