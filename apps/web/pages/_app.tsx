import React from 'react';
import { NativeBaseProvider } from 'native-base';

function App({ Component, pageProps }) {
    return (
        <NativeBaseProvider>
            <Component {...pageProps} />
        </NativeBaseProvider>
    )
}

export default App;
