const MI = true;
//IPv6 de teste
//reduz_ipv6("FF08:0db8:0000:0FF0:0000:0000:1")
//TODO: Corrigir sequencia 3(0)
function reduz_ipv6(ipv6) {
	let ipv6_reduzido="";
	let conjunto = ipv6.split(/[,.;: ]+/);
	let ultimoItem = conjunto.length - 1;
	for (let i = 0; i < conjunto.length; i++) {
		let item = conjunto[i];
		let nZero = false;
		let filtro = "";
		for (let c = 0; c < item.length; c++) {
			let caractere = item[c];
			if (!nZero && caractere != "0") {
				nZero = true;
				filtro += caractere;
			} else
				if (nZero)
					filtro += caractere;
			
		}
		ipv6_reduzido += filtro + (i < ultimoItem? ":" : "");
	}
	while (ipv6_reduzido.indexOf("::") != -1) {
		ipv6_reduzido = ipv6_reduzido.replace("::", ":");
	}
	return ipv6_reduzido;
}

function and(nS1, nS2) {
	let numSet1=String(nS1).split(/[,.:; ]+/);
	let numSet2=String(nS2).split(/[,.:; ]+/);
	if (numSet1.length != numSet2.length)
		return undefined;
	let alen=numSet1.length-1;
	let res="\n";
	let item;
	for (let i=0; i < numSet1.length; i++) {
		item=parseInt(numSet1[i]) & parseInt(numSet2[i]);
		res+=""+item+(i!=alen?".":"");
	}
	return res;
}

function div8bits(quantidade_decimal) {
	let dividido = "";
	while (quantidade_decimal > 0) {
		dividido = dividido + "." + (quantidade_decimal % 256);
		quantidade_decimal = Math.floor(quantidade_decimal / 256);
	}
	return dividido.slice(1).split(".").reverse().join(".");
}

// IP 32 bits(0-255.0-255.0-255.0-255, 4 bytes/numeros = 32 bits binarios)
function int2ip(intdec) {
  return ((intdec >> 24) & 0xff)+'.'+
		 ((intdec >> 16) & 0xff)+'.'+
		 ((intdec >> 8) & 0xff)+'.'+
		 (intdec & 0xff);
}
// TODO: Checar
function ip2int(ip) {
	let ipNum = ip.split('.');
	if (ipNum.length!=4)
		return -1;
	return (ipNum[0] << 24)+(ipNum[1] << 16)+(ipNum[2] << 8)+(ipNum[3] & 0xff);
}
// Computa o ultimo endereco da rede(broadcast)
function subnetBroadcastInt(subrede, mascaraBits){
  return subrede + Math.pow(2, 32 - mascaraBits) - 1;
}
function subnetBroadcast(subrede, mascaraBits){
	return int2ip(subnetBroadcastInt(ip2int(subrede), mascaraBits));
}