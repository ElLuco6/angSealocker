export class Board{
    constructor(
        public  boardImage: { type: String, required: true },
        public  size_ft: { type: Number, required: true },
        public  size_inch: { type: Number, required: true },
        public  shape: { type: String, required: true },
        public _id = ""

    ){}
}
