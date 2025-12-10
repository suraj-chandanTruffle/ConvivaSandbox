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
            const chatWindow = document.querySelector('[data-id="convivaAIChatWindow"]');
            console.log(chatWindow.getAttribute("data-id"));
        });
        window.addEventListener('onEmbeddedMessagingConversationStarted', function (event) {
            console.log("✅ onEmbeddedMessagingConversationStarted");
        });
        window.addEventListener('onEmbeddedMessagingFirstBotMessageSent', function (event) {
            console.log("✅ onEmbeddedMessagingFirstBotMessageSent");
        });
    } catch (err) {
        console.error('Error loading Embedded Messaging: ', err);
    }
};

function greet() {
    alert("Hello from JavaScript!");
}
