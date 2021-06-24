import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {

    return (
        /*         <div className={s.wrapper}> */
        <div className={s.backimg}>

            <div className={s.wrapper}>
                <div className={s.intro}>Как со мной связаться?</div>

                <div className={s.container}>
                    <div className={s.item}>
                        <div className={s.social}>
                            <a href="https://facebook.com/ondrej.p.barta" className={s.link + ' ' + s.facebook} target="_parent"><span class="fa fa-facebook-square"></span></a>
                        </div>
                        <div className={s.itemContent}>
                            <div className={s.title}>Мои соцсети</div>
                            <div className={s.subTitle}>www.facebook.com/jenya</div>
                        </div>
                    </div>
                    <div className={s.item}>
                    </div>
                    <div className={s.item}>
                        <div className={s.social}>
                            <a href="https://facebook.com/ondrej.p.barta" className={s.link + ' ' + s.twitter} target="_parent"><span class="fa fa-phone-square"></span></a>
                        </div>
                        <div className={s.itemContent}>
                            <div className={s.title}>Позвоните мне</div>
                            <div className={s.subTitle}>
                                <p>+375 29 7055455</p>
                                <p>+375 29 7055455</p>
                                </div>
                        </div>
                    </div>
                    <div className={s.item}>
                    </div>
                    <div className={s.item}>
                        <div className={s.social}>
                            <a href="https://facebook.com/ondrej.p.barta" className={s.link + ' ' + s.google} target="_parent"><span class="fa fa-envelope"></span></a>
                        </div>
                        <div className={s.itemContent}>
                            <div className={s.title}>Электронное письмо</div>
                            <div className={s.subTitle}>
                                <p>jenya@mail.ru</p>
                                <p>tutorenglish@gmail.com</p>
                                </div>
                        </div>
                    </div>
                    <div className={s.item}>
                    </div>
                </div>
            </div>

        </div>
        /*         </div > */
    )

}

export default Contacts;