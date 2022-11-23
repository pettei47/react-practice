type sampleType = {
	grass: Number,
	fire: String,
	water: boolean,
}

const sampleObj: sampleType = {
	grass: 1,
	fire: "hogeta",
	water: true,
}

type sampleKeys0 = keyof sampleType

type sampleKeys1 = keyof typeof sampleObj | "normal"

const sampleKeysObj0: sampleKeys0 = "grass"

const sampleKeysObj1: sampleKeys1 = "fire"
