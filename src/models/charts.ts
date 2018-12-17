export class BarOptions{
    constructor(
        public ArgumentField: string,
        public ValueField: string,
        public TypeField: string,
        public TypeValues: SeriesType[],
        public Color: string
    ){}
}

export class SeriesType{
    constructor(
        public Name: string,
        public Value: string
    ){}
}