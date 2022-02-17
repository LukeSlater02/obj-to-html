const applComputer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const winComputer = {
	id: 1,
	manufacturer: "Windows",
	make: "Surface",
	model: "Pro",
	specs: {
		memory: 8,
		hardDrive: "1 TB",
		processor: 4.4
	}
}

const compHTML = (pcObject) => {
    const compHTML = 
    `<section id= ${pcObject.id}>
	<h1>${pcObject.manufacturer} ${pcObject.make}</h1>
	<div>Model: ${pcObject.model}</div>
	<div>Memory: ${pcObject.specs.memory} GB</div>
	<div>Hard drive space: ${pcObject.specs.hardDrive}</div>
	<div>Processor speed: ${pcObject.specs.processor} Ghz</div>
    </section>`
    return compHTML
}


const appPCHTML = compHTML(applComputer);
const winPCHTML = compHTML(winComputer);

const appPCHTMLcontainer = document.querySelector("#appDiv");
const winPCHTMLcontainer = document.querySelector("#winDiv");

appPCHTMLcontainer.innerHTML = appPCHTML
winPCHTMLcontainer.innerHTML = winPCHTML
