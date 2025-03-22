import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const BiographyScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>

      <Text className="text-blue" style={styles.header}>BIOGRAPHY</Text>
      <Text style={styles.title}>Alan Turing</Text>

      <Text style={styles.description}>
        Matemático, lógico, criptoanalista e cientista da computação britânico que teve um papel fundamental na formalização do conceito de algoritmo e computação com a máquina de Turing, desempenhando um papel importante na criação do computador moderno.
      </Text>

      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg' }} style={styles.image} />
      <Text style={styles.date}>(1912-1954)</Text>

      <Text style={styles.subtitle}>A Vida de Alan Turing</Text>

      <Text style={styles.sectionTitle}>Quem foi Alan Turing?</Text>
      <Text style={styles.text}>
        Alan Turing foi um brilhante matemático britânico que assumiu um papel de liderança na quebra de cifras nazistas durante a Segunda Guerra Mundial. Em seu artigo seminal de 1936, ele provou que não pode existir nenhum método algorítmico universal para determinar a verdade na matemática, e que a matemática sempre conterá proposições indecidíveis. Seu trabalho é amplamente reconhecido como pesquisa fundamental da ciência da computação e inteligência artificial.
      </Text>

      <Text style={styles.sectionTitle}>Sua vida</Text>

      <Text style={styles.text}>
      O cientista inglês Alan Turing nasceu Alan Mathison Turing em 23 de junho de 1912, em Maida Vale, Londres, Inglaterra. Ainda jovem, ele demonstrou sinais de alta inteligência, que alguns de seus professores reconheceram, mas não necessariamente respeitaram. Quando Turing frequentou a famosa Sherborne School independente aos 13 anos, ele se interessou particularmente por matemática e ciências.
      </Text>

      <Text style={styles.text}>
      Depois de Sherborne, Turing matriculou-se no King's College (Universidade de Cambridge) em Cambridge, Inglaterra, onde estudou de 1931 a 1934. Como resultado de sua dissertação, na qual provou o teorema do limite central, Turing foi eleito membro da escola após sua graduação.
      Em 1936, Turing entregou um artigo, "On Computable Numbers, with an Application to the Entscheidungsproblem", no qual apresentou a noção de uma máquina universal (mais tarde chamada de "Universal Turing Machine" e depois "Turing machine") capaz de computar qualquer coisa que seja computável: é considerada a precursora do computador moderno.
      </Text>
      
      <Text style={styles.text}>
      Nos dois anos seguintes, Turing estudou matemática e criptologia no Institute for Advanced Study em Princeton, Nova Jersey. Após receber seu Ph.D. pela Universidade de Princeton em 1938, ele retornou a Cambridge e então assumiu um cargo de meio período na Government Code and Cypher School, uma organização britânica de quebra de códigos.
      </Text>
      
      

      <Text style={styles.sectionTitle}>Criptoanálise e os primeiros computadores</Text>

      <Text style={styles.text}>
        Durante a Segunda Guerra Mundial, Turing foi um dos principais participantes da quebra de códigos em tempo de guerra, particularmente de cifras alemãs. Ele trabalhou em Bletchley Park, a estação de guerra do GCCS, onde fez cinco grandes avanços no campo da criptoanálise, incluindo a especificação do bombe, um dispositivo eletromecânico usado para ajudar a decifrar sinais criptografados alemães Enigma.
        </Text>
      <Text style={styles.text}>
        As contribuições de Turing para o processo de quebra de códigos não pararam por aí: ele também escreveu dois artigos sobre abordagens matemáticas para quebra de códigos, que se tornaram ativos tão importantes para a Code and Cypher School (mais tarde conhecida como Government Communications Headquarters) que o GCHQ esperou até abril de 2012 para liberá-los para o National Archives of the United Kingdom.
        </Text>
        
      <Text style={styles.text}>
        Turing mudou-se para Londres em meados da década de 1940 e começou a trabalhar para o National Physical Laboratory. Entre suas contribuições mais notáveis ​​enquanto trabalhava na instalação, Turing liderou o trabalho de design para o Automatic Computing Engine e, finalmente, criou um projeto inovador para computadores de programa de loja. Embora uma versão completa do ACE nunca tenha sido construída, seu conceito tem sido usado como modelo por corporações de tecnologia em todo o mundo por vários anos, influenciando o design do English Electric DEUCE e do American Bendix G-15 — creditado por muitos na indústria de tecnologia como o primeiro computador pessoal do mundo — entre outros modelos de computador.
        </Text>
        
      <Text style={styles.text}>
          Turing passou a ocupar cargos de alto escalão no departamento de matemática e, mais tarde, no laboratório de computação da Universidade de Manchester no final da década de 1940. Ele abordou pela primeira vez a questão da inteligência artificial em seu artigo de 1950, "Computing machinery and intelligence", e propôs um experimento conhecido como "Teste de Turing" — um esforço para criar um padrão de design de inteligência para a indústria de tecnologia. Nas últimas décadas, o teste influenciou significativamente os debates sobre inteligência artificial.
        </Text>
        

      <Text style={styles.sectionTitle}>Homossexualidade, Condenação e Morte</Text>

      <Text style={styles.text}>
        Logo após a Segunda Guerra Mundial, Turing recebeu uma Ordem do Império Britânico por seu trabalho. No que seria seu 86º aniversário, o biógrafo de Turing, Andrew Hodges, revelou uma placa azul oficial do English Heritage em sua casa de infância.
        </Text>
      <Text style={styles.text}>
        Em junho de 2007, uma estátua em tamanho real de Turing foi inaugurada no Bletchley Park, em Buckinghamshire, Inglaterra. Uma estátua de bronze de Turing foi inaugurada na Universidade de Surrey em 28 de outubro de 2004, para marcar o 50º aniversário de sua morte. Além disso, o Princeton University Alumni Weekly nomeou Turing o segundo ex-aluno mais significativo na história da escola — James Madison ocupou a posição nº 1.
        </Text>
        
      <Text style={styles.text}>
        Turing foi homenageado de várias outras maneiras, particularmente na cidade de Manchester, onde trabalhou até o fim de sua vida. Em 1999, a revista Time o nomeou uma das "100 Pessoas Mais Importantes do Século XX", dizendo: "O fato é que todo mundo que digita em um teclado, abre uma planilha ou um programa de processamento de texto, está trabalhando em uma encarnação de uma máquina de Turing." Turing também foi classificado em 21º na pesquisa nacional da BBC dos "100 Maiores Britânicos" em 2002. Em geral, Turing foi reconhecido por seu impacto na ciência da computação, com muitos creditando-o como o "fundador" do campo.
        </Text>
        
      <Text style={styles.text}>
        Após uma petição iniciada por John Graham-Cumming, o então primeiro-ministro Gordon Brown divulgou uma declaração em 10 de setembro de 2009, em nome do governo britânico, que postumamente se desculpou com Turing por processá-lo como homossexual.
        </Text>
        
      <Text style={styles.text}>
        "Este reconhecimento do status de Alan como uma das vítimas mais famosas da homofobia na Grã-Bretanha é outro passo em direção à igualdade e há muito esperado. Mas, mais do que isso, Alan merece reconhecimento por sua contribuição à humanidade", declarou Brown. "É graças a homens e mulheres que estavam totalmente comprometidos em lutar contra o fascismo, pessoas como Alan Turing, que os horrores do Holocausto e da guerra total são parte da história da Europa e não do presente da Europa. Então, em nome do governo britânico e de todos aqueles que vivem livremente graças ao trabalho de Alan, tenho muito orgulho de dizer: lamentamos, você merecia muito mais."
        </Text>
        
      <Text style={styles.text}>
        Em 2013, a Rainha Elizabeth II concedeu postumamente a Turing um raro perdão real quase 60 anos após seu suicídio. Três anos depois, em 20 de outubro de 2016, o governo britânico anunciou a "Lei de Turing" para perdoar postumamente milhares de homens gays e bissexuais que foram condenados por atos homossexuais quando isso era considerado um crime. De acordo com uma declaração emitida pelo Ministro da Justiça Sam Gyimah, a lei também perdoa automaticamente pessoas vivas que foram "condenadas por crimes sexuais históricos que seriam inocentes de qualquer crime hoje.
        </Text>
        
      <Text style={styles.text}>
        Em julho de 2019, o Banco da Inglaterra anunciou que Turing apareceria na nova nota de £ 50 do Reino Unido, junto com imagens de seu trabalho. O famoso cientista foi escolhido de uma lista de quase 1.000 candidatos indicados pelo público em geral, incluindo o físico teórico Stephen Hawking e a matemática Ada Lovelace.
        </Text>
        

    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 16 },

  header: { 
    textAlign: "center", 
    fontSize: 30, 
    fontWeight: "bold", 
    marginBottom: 15 
  },

  title: { 
    fontSize: 28,
    fontWeight: "bold", 
    marginBottom: 10, 
    textAlign: "center"
  },

  description: { 
    fontSize: 18, 
    marginBottom: 10 
  },

  image: { 
    width: "100%", 
    height: 350, 
    resizeMode: "cover", 
    marginBottom: 10 
  },

  date: { 
    textAlign: "right", 
    fontSize: 12, 
    marginBottom: 10 
  },

  subtitle: { 
    fontSize: 26, 
    fontWeight: "bold", 
    marginBottom: 10, 
    textAlign: "center"
  },

  sectionTitle: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginTop: 10, 
    marginBottom: 5
  },

  text: { 
    fontSize: 18, 
    marginBottom: 10
  },
});

export default BiographyScreen;
