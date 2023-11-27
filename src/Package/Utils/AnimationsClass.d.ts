declare interface AnimationClass {
	AwaitLoaded(player_or_rig: Player | Model): void;
	AreTracksLoaded(player_or_rig: Player | Model): boolean;
	LoadTracks(player_or_rig: Player | Model, rigType: string): void;
	GetTrack(player_or_rig: Player | Model, path: unknown): AnimationTrack | undefined;
	PlayTrack(
		player_or_rig: Player | Model,
		path: unknown,
		fadeTime?: number,
		weight?: number,
		speed?: number,
	): AnimationTrack;
	StopTrack(player_or_rig: Player | Model, path: unknown, fadeTime?: number): AnimationTrack;
	GetTrackFromAlias(player_or_rig: Player | Model, alias: unknown): AnimationTrack | undefined;
	PlayTrackFromAlias(
		player_or_rig: Player | Model,
		alias: unknown,
		fadeTime?: number,
		weight?: number,
		speed?: number,
	): AnimationTrack;
	StopTrackFromAlias(player_or_rig: Player | Model, alias: unknown, fadeTime?: number): AnimationTrack;
	SetTrackAlias(player_or_rig: Player | Model, alias: unknown, path: unknown): void;
	RemoveTrackAlias(player_or_rig: Player | Model, alias: unknown): void;
}

export = AnimationClass;
