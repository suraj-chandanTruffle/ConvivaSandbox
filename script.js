let message = '';
document.getElementById("convivaChatInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        message = e.target.value;
        doCallAgentforce();
    }
});
function initEmbeddedMessaging() {
    try {
        embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
        embeddedservice_bootstrap.init(
            '00DVA000008Fuc9',
            'Conviva_Messaging_Channel',
            'https://convivareimagined--partialsb.sandbox.my.site.com/ESWConvivaMessagingChan1765182896774',
            {
                scrt2URL: 'https://convivareimagined--partialsb.sandbox.my.salesforce-scrt.com'
            }
        );
        window.addEventListener("onEmbeddedMessagingReady", () => {
            console.log("✅ onEmbeddedMessagingReady");
            const chatBubble = document.querySelector('[data-id="convivaAIChatBubble"]');
            console.log(chatBubble.getAttribute("data-id"));
            chatBubble.classList.add("unhideContainer");
            chatBubble.classList.remove("hideContainer");
        });
        window.addEventListener('onEmbeddedMessagingConversationStarted', function (event) {
            console.log("✅ onEmbeddedMessagingConversationStarted");
            const chatWindow = document.querySelector('[data-id="convivaAIChatWindow"]');
            chatWindow.classList.add("hideContainer");
            chatWindow.classList.remove("unhideContainer");
        });
        window.addEventListener('onEmbeddedMessagingFirstBotMessageSent', function (event) {
            console.log("✅ onEmbeddedMessagingFirstBotMessageSent");
            console.log(message);
            embeddedservice_bootstrap.utilAPI.sendTextMessage(message);
        });
        window.addEventListener('onEmbeddedMessagingConversationOpened', function (event) {
            console.log("✅ onEmbeddedMessagingConversationOpened");
        });
        window.addEventListener('onEmbeddedMessagingConversationRouted', function (event) {
            console.log("✅ onEmbeddedMessagingConversationRouted");
        });
         window.addEventListener('onEmbeddedMessagingSessionStatusUpdate', function (event) {
            console.log("✅ onEmbeddedMessagingSessionStatusUpdate");
        });
    } catch (err) {
        console.error('Error loading Embedded Messaging: ', err);
    }
};
function doOpenConvivaAIChatWindow() {
    const chatBubble = document.querySelector('[data-id="convivaAIChatBubble"]');
    chatBubble.classList.add("hideContainer");
    chatBubble.classList.remove("unhideContainer");
    const chatWindow = document.querySelector('[data-id="convivaAIChatWindow"]');
    chatWindow.classList.add("unhideContainer");
    chatWindow.classList.remove("hideContainer");
}
function doMinimizeConvivaAIChatWindow() {
    const chatBubble = document.querySelector('[data-id="convivaAIChatBubble"]');
    chatBubble.classList.add("unhideContainer");
    chatBubble.classList.remove("hideContainer");
    const chatWindow = document.querySelector('[data-id="convivaAIChatWindow"]');
    chatWindow.classList.add("hideContainer");
    chatWindow.classList.remove("unhideContainer");
}
function onTalkToSales(){
    message = 'Talk to sales';
    doCallAgentforce();
}
function onShowMeAConvivaDemo(){
    message = 'Show me a Conviva demo';
    doCallAgentforce();
}
function onHowCanConvivaHelpMyBusiness(){
    message = 'How can Conviva help my business';
    doCallAgentforce();
}
function onINeedTechnicalSupport(){
    message = 'I need technical support';
    doCallAgentforce();
}
function doCallAgentforce() {
    embeddedservice_bootstrap.utilAPI.launchChat();
}
