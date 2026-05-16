const express = require("express")
const axios = require("axios")

const app = express()

app.use(express.json())

const BOT_TOKEN = "TON_BOT_TOKEN"

app.post("/webhook", async (req, res) => {

let data = req.body

let userId = data.customer_reference

if(data.status === "SUCCESS"){

await axios.post(
`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
{
chat_id: userId,
text:
"🎉 Paiement confirmé !\n\n✅ Accès VIP activé.\n\n🔗 https://t.me/TON_CANAL"
}
)

}

res.send("OK")

})

app.get("/", (req,res)=>{
res.send("Bot actif")
})

app.listen(3000)
