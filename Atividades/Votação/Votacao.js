
    let candidatoX = 0;
    let candidatoY = 0;
    let candidatoZ = 0;
    let votoBranco = 0;
    let votoNulo = 0;

    while (true) {
        let voto = prompt('Digite o número do candidato: \n (889) para candidato_X \n (847) para candidato_Y \n (515) para candidato_Z  \n (0) para voto em branco.');
        
        if (voto === null) {
            break; // O usuário cancelou a votação
        }
        
        if (isNaN(voto) || voto === "") {
            alert("Voto inválido! Digite o número correspondente ao candidato ou 0 para branco.");
            continue;
        }

        voto = parseInt(voto);

        switch (voto) {
            case 889:
                candidatoX++;
                break;
            case 847:
                candidatoY++;
                break;
            case 515:
                candidatoZ++;
                break;
            case 0:
                votoBranco++;
                break;
            default:
                votoNulo++;
                break;
        }
        
        let continuarVotacao = confirm("Deseja continuar votando?");
        if (!continuarVotacao) {
            break;
        }
    }

    let totalVotos = candidatoX + candidatoY + candidatoZ + votoBranco + votoNulo;

    alert(` RESULTADO DA ELEIÇÃO:
            Candidato_X: ${candidatoX} votos
            Candidato_Y: ${candidatoY} votos 
            Candidato_Z: ${candidatoZ} votos 
            Brancos: ${votoBranco} votos 
            Nulos: ${votoNulo} votos 
        
            Vencedor: ${obterVencedor(candidatoX, candidatoY, candidatoZ)}
    `);

function obterVencedor(votosX, votosY, votosZ) {
    if (votosX > votosY && votosX > votosZ) {
        return "Candidato_X";
    } else if (votosY > votosX && votosY > votosZ) {
        return "Candidato_Y";
    } else if (votosZ > votosX && votosZ > votosY) {
        return "Candidato_Z";
    } else {
        return "Empate ou nenhum candidato recebeu votos suficientes para ser considerado vencedor.";
    }
}

