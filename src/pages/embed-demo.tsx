import React from 'react';

export default function EmbedDemo() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Chat Demo Embed Instructions</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Option 1: Embed via iframe</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              {`<iframe
  src="https://your-domain.com/embed.html"
  width="100%"
  height="800"
  frameborder="0"
></iframe>`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Option 2: Direct Integration</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              {`<!-- 1. Add the container -->
<div id="chat-demo"></div>

<!-- 2. Add the required scripts -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://your-domain.com/embed.js"></script>

<!-- 3. Initialize the chat demo -->
<script>
  window.initChatDemo('chat-demo');
</script>`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="border rounded-lg overflow-hidden">
            <iframe
              src="/embed.html"
              width="100%"
              height="800"
              frameBorder="0"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}