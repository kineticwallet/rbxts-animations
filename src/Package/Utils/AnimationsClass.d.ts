declare class AnimationClass {
	public AwaitLoaded(player_or_rig: Player | Model): void;
	public AreTracksLoaded(player_or_rig: Player | Model): boolean;
	public LoadTracks(player_or_rig: Player | Model, rigType: string): void;
	public GetTrack(player_or_rig: Player | Model, path: any): AnimationTrack | undefined;
	PlayTrack(
		player_or_rig: Player | Model,
		path: any,
		fadeTime?: number,
		weight?: number,
		speed?: number,
	): AnimationTrack;
	StopTrack(player_or_rig: Player | Model, path: any, fadeTime?: number): AnimationTrack;
	public GetTrackFromAlias(player_or_rig: Player | Model, alias: unknown): AnimationTrack | undefined;
	public PlayTrackFromAlias(
		player_or_rig: Player | Model,
		alias: unknown,
		fadeTime?: number,
		weight?: number,
		speed?: number,
	): AnimationTrack;
	StopTrackFromAlias(player_or_rig: Player | Model, alias: unknown, fadeTime?: number): AnimationTrack;
	public SetTrackAlias(player_or_rig: Player | Model, alias: unknown, path: unknown): void;
	public RemoveTrackAlias(player_or_rig: Player | Model, alias: unknown): void;
}

export = AnimationClass;
