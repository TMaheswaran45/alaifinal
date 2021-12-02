import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import PageTitle from '../components/freedemo/PageTitle'
import ContactBody from '../components/freedemo/ContactBody'

export default () => (
    <Preloader>
        <Placeholder>
            <div className="preloader">
                <div className="spinner"></div>
            </div>
        </Placeholder>
        <Header />
        <PageTitle />
        <ContactBody />
        <Footer />
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
    </Preloader>
)
