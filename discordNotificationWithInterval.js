import fetch from "node-fetch";

async function sendDiscordNotification(message) {
    const webhookUrl = "https://discord.com/api/webhooks/1069425985646231572/osBtFDqewo2FRWTGyVM5mLlGfE0ZM-3KPmIZTMrpG5-OAwYtth8no78lRsMs0Wzf5ZA8";
    
    const payload = {
      content: message
    };
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    };
  
 try {
      const response = await fetch(webhookUrl, options);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      console.log("Notificação enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar notificação:", error);
    }
  }
  
  const notifications = () => {
    const date = new Date();
    const day = date.getUTCDay();
    const hour = date.getHours()
    const firstNotification = 11;
    const lastNotification = 17;

    if(day > 1 && day < 7){
      if(hour === firstNotification) {
        sendDiscordNotification(`**Lembrete!!!**\nAdicionar horas trabalhadas nos cards!\n\nObrigado!`)
      } else if(hour === lastNotification){
        sendDiscordNotification(`**Lembrete!!!**\nAdicionar horas trabalhadas nos cards!\n\nObrigado!`)
      }
    }

    day === 2 && hour === 8 ? sendDiscordNotification(`Uma boa semana a todos!\nPra cima time!!!`) : day === 6 && hour === 18 ? sendDiscordNotification(`Um bom fim de semana a todos!`) : ""
  }

  setInterval(notifications, 3600000);