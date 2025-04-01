export type AppState = {
    menu: boolean,
    visiblePrograms: {
        [key in EPrograms]?: boolean
    },
    openPrograms: {
        [key in EPrograms]?: boolean
    },
    activeProgram?: EPrograms,
}

export enum EPrograms {
    ABOUT = "ABOUT",
    WEB_CAVE = "WEB_CAVE",
    SN_BRIDGE = "SN_BRIDGE",
}