import Vue from 'vue'
import BotUI from '../node_modules/botui/build/botui.js'
import '../node_modules/botui/build/botui.min.css'
import '../node_modules/botui/build/botui-theme-default.css'

export default function initBotApp () {
  let botui = BotUI('my-botui-app', {vue: Vue})

  botui.message.add({
    delay: 3000,
    content: 'Olá! seja bem-vindo!'
  });

  botui.message.add({
      delay: 4500,
    content: 'Somos a bestlocation e estamos aqui para encontrar o imóvel ideal para você!'
  }).then(function(){
    botui.message.add({
        delay: 3000,
        content: 'Vamos começar fazendo algumas perguntas'
      });
  }).then(function(){
    botui.message.add({
        delay: 4000,
        content: 'Qual é o seu nome?'
      }).then(function(){
            botui.action.text({
                action:{
                    placeholder: 'Name'
                }
            }).then(function (res){
                var name = res.value;
                botui.message.add({content: 'Olá '+ name+ " prazer em conhece-lo!"})
            })
      });
  })


}

