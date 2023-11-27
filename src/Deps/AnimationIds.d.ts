declare type idTable = {
	[key in any]: idTable | number;
};

declare type AnimationsIds = Record<string, idTable>;

declare const AnimationsIds: AnimationsIds;

export = AnimationsIds;
