declare type AutoCustomRBXAnimationIdsRead  = {
    [key in keyof Enum.HumanoidRigType]: Partial<{
        run: number,
		walk: number,
		jump: number,
		idle: { Animation1: number, Animation2: number },
		fall: number,
		swim: number,
		swimIdle: number,
		climb: number,
    }>
}

export = AutoCustomRBXAnimationIdsRead;
