const net = new brain.NeuralNetwork();

const data = [
	{
		input: {
			r: 0,
			g: 0,
			b: 0,
		},
		output: [1],
	},
	{
		input: {
			r: 1,
			g: 1,
			b: 1,
		},
		output: [0],
    },
    // Data below are training data which were obtained after trial and error
	{ input: { r: 0, g: 0, b: 0 }, output: [1] },
	{ input: { r: 1, g: 1, b: 1 }, output: [0] },
	{
		input: {
			r: 0.207233152281462,
			g: 0.14394494870686325,
			b: 0.7450811123389779,
		},
		output: [1],
	},
	{
		input: {
			r: 0.36199608100081826,
			g: 0.9930582963400372,
			b: 0.40407824256816227,
		},
		output: [0],
	},
	{
		input: {
			r: 0.645683348496698,
			g: 0.2036476391957719,
			b: 0.0711334709183824,
		},
		output: [1],
	},
	{
		input: {
			r: 0.5194568402910074,
			g: 0.6187604777241446,
			b: 0.8086453694674693,
		},
		output: [1],
	},
	{
		input: {
			r: 0.22428432183314662,
			g: 0.3879539453418466,
			b: 0.4143664924534961,
		},
		output: [1],
	},
	{
		input: {
			r: 0.5985691237048063,
			g: 0.24788093466376426,
			b: 0.37832356300770975,
		},
		output: [1],
	},
	{
		input: {
			r: 0.15669805019268557,
			g: 0.8491479382870777,
			b: 0.17731834924497425,
		},
		output: [0],
	},
	{
		input: {
			r: 0.018443319707834527,
			g: 0.7124834921018968,
			b: 0.4764372609375207,
		},
		output: [1],
	},
	{
		input: {
			r: 0.9872423496750571,
			g: 0.15635350477332777,
			b: 0.10093886623135473,
		},
		output: [0],
	},
	{
		input: {
			r: 0.7014670379914275,
			g: 0.551744293337821,
			b: 0.8049579849085159,
		},
		output: [0],
	},
	{
		input: {
			r: 0.7875156521741887,
			g: 0.18290270987878698,
			b: 0.4292889067722554,
		},
		output: [1],
	},
	{
		input: {
			r: 0.3576663708318587,
			g: 0.28811372078434305,
			b: 0.8951588767448785,
		},
		output: [1],
	},
	{
		input: {
			r: 0.41730246377494984,
			g: 0.4432364898845321,
			b: 0.050165008560080104,
		},
		output: [1],
	},
	{
		input: {
			r: 0.8173068217395026,
			g: 0.9102591327434402,
			b: 0.5025444457218958,
		},
		output: [0],
	},
];

net.train(data);

const colorEl = document.getElementById("color");
const guessEl = document.getElementById("guess");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");

let color;
setRandomColor();

// Event Listeners on Buttons
whiteButton.addEventListener("click", () => {
	chooseColor(1);
});
blackButton.addEventListener("click", () => {
	chooseColor(0);
});
printButton.addEventListener("click", print);

function chooseColor(value) {
	data.push({
		input: color,
		output: [value],
	});
	setRandomColor();
}

// To obtain new training data
function print() {
	console.log(JSON.stringify(data));
}

function setRandomColor() {
	color = {
		r: Math.random(),
		g: Math.random(),
		b: Math.random(),
	};

	const guess = net.run(color)[0];
	guessEl.style.color = guess > 0.5 ? "#fff" : "#000";
	colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${
		color.b * 255
	})`;
}
