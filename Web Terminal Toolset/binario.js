const MB = true;

function gerarTabelaBin(num) {

	let tabela = [];

	for (let n = 0; n < num; n++){

		let nmaior=num-n;

		tabela[n]=Math.round(Math.pow(2, nmaior)) / 2;

	}

	return tabela;

}

// alert(gerarTabelaBin(8));

const BIN_TABLE8 = gerarTabelaBin(8); // [128,64,32,16,8,4,2,1]



function __dec2bin(dec) {

	let bin="";

	for (let b=0; b<BIN_TABLE8.length; b++) {

		if (dec>=BIN_TABLE8[b]) {

			dec-=BIN_TABLE8[b];

			bin+="1";

		} else {

			bin+="0";

		}

	}

	return bin;

}

function __bin2dec(bin) {

	let dec=0;

	for (let b=0; b<BIN_TABLE8.length; b++) {

		if (bin[b]=='1') {

			dec+=BIN_TABLE8[b];

		}

	}

	return dec;

}

function dec2bin(input) {

	let array=String(input).split(/[,.:; ]+/);

	let alen=array.length-1;

	let res="\n";

	let item;

	for (let i=0; i<array.length; i++) {

		item=array[i];

		res+=""+__dec2bin(item)+(i!=alen?".":"");

	}

	return res;

}

function bin2dec(input) {

	let array=String(input).split(/[,.:; ]+/);

	let alen=array.length-1;

	let res="\n";

	let item;

	for (let i=0; i<array.length; i++) {

		item=array[i];

		res+=""+__bin2dec(item)+(i!=alen?".":"");

	}

	if (res.indexOf(".") == -1)

		res = parseInt(res);

	return res;

}

function pot(n, m){

	return Math.pow(n, m);

}

function contar(seq, car){

	let c = 0;

	for (let i = 0; i < seq.length; i++) {

		if (seq[i] == car)

			c++;

	}

	return c;

}
