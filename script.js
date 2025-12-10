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
        });
        window.addEventListener('onEmbeddedMessagingFirstBotMessageSent', function (event) {
            console.log("✅ onEmbeddedMessagingFirstBotMessageSent");
        });
    } catch (err) {
        console.error('Error loading Embedded Messaging: ', err);
    }
};
function doOpenConvivaAIChatWindow() {
    const chatBubble = document.querySelector('[data-id="convivaAIChatBubble"]');
    chatBubble.classList.add("hideContainer");
    chatBubble.classList.remove("unhideContainer");
    const chatWindow = document.querySelector('[data-id="convivaAIChatBubble"]');
    chatWindow.classList.add("unhideContainer");
    chatWindow.classList.remove("hideContainer");
}
function doMinimizeConvivaAIChatWindow() {
    const chatBubble = document.querySelector('[data-id="convivaAIChatBubble"]');
    chatBubble.classList.add("unhideContainer");
    chatBubble.classList.remove("hideContainer");
    const chatWindow = document.querySelector('[data-id="convivaAIChatBubble"]');
    chatWindow.classList.add("hideContainer");
    chatWindow.classList.remove("unhideContainer");
}
function greet() {
    alert("Hello from JavaScript!");
}
