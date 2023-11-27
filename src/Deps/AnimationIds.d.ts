declare type idTable =  {
    [key in any]: idTable | number
}

type AnimationsIds = Record<string, idTable>

export = AnimationsIds;
