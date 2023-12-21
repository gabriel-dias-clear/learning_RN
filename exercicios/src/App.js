import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
// ... (previous code remains unchanged)

import DigiteSeuNome from  './components/DigiteSeuNome'
import UsuarioLogado from './components/UsuarioLogado'
import MinMax from './components/MinMax'
import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro'


import Mega from './components/mega/Mega'

// ... (previous code remains unchanged)

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdeNumeros={12} />
        <DigiteSeuNome />
        <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }} />
        {/* ... (other components) */}
        <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />
    </SafeAreaView>
)


const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})
