import React from 'react';
import s from './MainPage.module.css'
import { NavLink } from 'react-router-dom';

const MainPage = () => {

    return (

        <div className={s.intro}>
            <div className={s.overlay}>
                <div className={s.container}>
                    <div className={s.contentInner}>
                        <div className={s.introTitle}>
                            изучение английского языка в минске и не только
                        </div>
                        <div className={s.introSubtitle}>
                            Начните изучать английский язык с индивидуальным преподавателем онлайн с понедельника
                        </div>
                        <div className={s.littleText}>
                            Удобное дистанционное обучение английскому языку для детей и взрослых.
                            Обучение проводит опытный преподаватель со стажем более 10 лет.
                        </div>
                        <NavLink to='/myMethod' className={s.btnGreen}>Подробнее</NavLink>
                    </div>
                </div>
            </div>


        </div>

    )

}

export default MainPage;