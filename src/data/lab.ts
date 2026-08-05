export interface LabProject {
    id: string;
    title: string;
    tech: string;
    icon: string;
    link: string
}

export const labData: LabProject[] = [
    // RETRO_SHOOTER
    {
        id: "retro-shooter",
        icon: "html5",
        title: "RETRO_SHOOTER",
        tech: "Javascript",
        link: ""
    },
    // SYNTH_WAVE_UI
    {
        id: "song-change",
        icon: "html5",
        title: "SYNTH_WAVE_UI",
        tech: "Web Audio API",
        link: ""
    },// TICKER
    {
        id: "ticker",
        icon: "html5",
        title: "TICKER",
        tech: "TypeScript",
        link: ""
    },
]