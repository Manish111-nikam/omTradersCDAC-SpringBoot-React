import React from 'react'
import './Service.css'
import ServiceCard from './ServiceCard'
import { Link } from 'react-router-dom'

function Service() {

  return (
    <div className='service'>
        <div className='logo1'>
        <Link to='/'>
          <img className='login_logo' src='om_icon.jpg' alt="Logo" />
        </Link>
        </div>

        <div className='button-container'>
        <Link to="/contactMail">
        <button>Click To Mail</button>
        </Link>
        </div>

        <div className='service_container'>
            <div className='service_row'>
                <ServiceCard name={'Bajaj Electricals'} location={'https://www.google.com/maps/dir//C%2Fo+Om+Sai+Services+Shop+No+B-12,+Hari+Vihar+Society+Road,+near+Bacchav+Classes,+Narayan+Bapu+Nagar,+Shivaji+Nagar,+Nashik,+Maharashtra+422101/@19.9713344,73.7513862,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bddeb36851fe86f:0x698f7761b8edb44d!2m2!1d73.8337879!2d19.9713534?hl=en&entry=ttu'} image={'Brand_img/bajaj.png'} contact={'+91-2578221152'} address={'Bajaj Electricals Authorized Service Center | Nashik, Maharashtra, C/o Om Sai Services Shop No B-12, Hari Vihar Society Road, near Bacchav Classes, Narayan Bapu Nagar, Shivaji Nagar, Nashik, Maharashtra 422101'} />
                <ServiceCard name={'Syska'} location={'https://www.google.com/maps/dir/20.0386411,73.8020553/New+CBS+(%E0%A4%A8%E0%A4%B5%E0%A5%80%E0%A4%A8+%E0%A4%AC%E0%A4%B8+%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE%E0%A4%A8%E0%A4%95),+Shop+No+2,+Bus+Stand,+Thakkar+Bazar+Complex,+behind+Maharashtra+Navanirman+Sena,+behind+Manase+Office,+Police+Staff+Colony,+Nashik,+Maharashtra+422003/@20.0176999,73.7711685,14z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bddebe0b2ee115f:0x6c72fdf8e43c3b3e!2m2!1d73.7800032!2d19.9972953!3e0?entry=ttu'} image={'Brand_img/syska.png'} contact={'708377549'} address={'696, Teli Gali, Raviwar Peth, Nashik, Maharashtra - 422001'} />
                <ServiceCard name={'Usha'} location={'https://www.google.com/maps/search/3rd+Morya+Appt.+Patil+Lane+No.+1+,+Behind+Mega+Bite,+Sweet+Mart+College+Road+,+Nashik+-+422005+direction/@20.0048401,73.768816,17z/data=!3m1!4b1?entry=ttu'} image={'Brand_img/usha.png'} contact={'12345647'} address={'3rd Morya Appt. Patil Lane No. 1 , Behind Mega Bite, Sweet Mart College Road , Nashik - 422005'} />
            </div>
            
            <div className='service_row'>
            <ServiceCard name={'Havells'} location={'https://www.google.com/maps/dir//C%2Fo+Om+Sai+Services+Shop+No+B-12,+Hari+Vihar+Society+Road,+near+Bacchav+Classes,+Narayan+Bapu+Nagar,+Shivaji+Nagar,+Nashik,+Maharashtra+422101/@19.9713344,73.7513862,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bddeb36851fe86f:0x698f7761b8edb44d!2m2!1d73.8337879!2d19.9713534?hl=en&entry=ttu'} image={'Brand_img/havells1.png'} contact={'+91-2578221152'} address={' Nashik, Maharashtra, C/o Om Sai Services Shop No B-12, Hari Vihar Society Road, near Bacchav Classes, Narayan Bapu Nagar, Shivaji Nagar, Nashik, Maharashtra 422101'} />
                <ServiceCard name={'Crompton'} location={'https://www.google.com/maps/dir/20.0386411,73.8020553/New+CBS+(%E0%A4%A8%E0%A4%B5%E0%A5%80%E0%A4%A8+%E0%A4%AC%E0%A4%B8+%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE%E0%A4%A8%E0%A4%95),+Shop+No+2,+Bus+Stand,+Thakkar+Bazar+Complex,+behind+Maharashtra+Navanirman+Sena,+behind+Manase+Office,+Police+Staff+Colony,+Nashik,+Maharashtra+422003/@20.0176999,73.7711685,14z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bddebe0b2ee115f:0x6c72fdf8e43c3b3e!2m2!1d73.7800032!2d19.9972953!3e0?entry=ttu'} image={'Brand_img/crompton.png'} contact={'708377549'} address={'696, Teli Gali, Raviwar Peth, Nashik, Maharashtra - 422001'} />
                <ServiceCard name={'Orpat'} location={'https://www.google.com/maps/search/3rd+Morya+Appt.+Patil+Lane+No.+1+,+Behind+Mega+Bite,+Sweet+Mart+College+Road+,+Nashik+-+422005+direction/@20.0048401,73.768816,17z/data=!3m1!4b1?entry=ttu'} image={'Brand_img/orpat.png'} contact={'12345647'} address={'3rd Morya Appt. Patil Lane No. 1 , Behind Mega Bite, Sweet Mart College Road , Nashik - 422005'} />
            </div>

            <div className='service_row'>
            <ServiceCard name={'Preethi'} location={'https://www.google.com/maps/dir//C%2Fo+Om+Sai+Services+Shop+No+B-12,+Hari+Vihar+Society+Road,+near+Bacchav+Classes,+Narayan+Bapu+Nagar,+Shivaji+Nagar,+Nashik,+Maharashtra+422101/@19.9713344,73.7513862,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bddeb36851fe86f:0x698f7761b8edb44d!2m2!1d73.8337879!2d19.9713534?hl=en&entry=ttu'} image={'Brand_img/preethi.png'} contact={'+91-2578221152'} address={' Nashik, Maharashtra, C/o Om Sai Services Shop No B-12, Hari Vihar Society Road, near Bacchav Classes, Narayan Bapu Nagar, Shivaji Nagar, Nashik, Maharashtra 422101'} />
                <ServiceCard name={'Prestige'} location={'https://www.google.com/maps/dir/20.0386411,73.8020553/New+CBS+(%E0%A4%A8%E0%A4%B5%E0%A5%80%E0%A4%A8+%E0%A4%AC%E0%A4%B8+%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE%E0%A4%A8%E0%A4%95),+Shop+No+2,+Bus+Stand,+Thakkar+Bazar+Complex,+behind+Maharashtra+Navanirman+Sena,+behind+Manase+Office,+Police+Staff+Colony,+Nashik,+Maharashtra+422003/@20.0176999,73.7711685,14z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bddebe0b2ee115f:0x6c72fdf8e43c3b3e!2m2!1d73.7800032!2d19.9972953!3e0?entry=ttu'} image={'Brand_img/prestige.png'} contact={'708377549'} address={'696, Teli Gali, Raviwar Peth, Nashik, Maharashtra - 422001'} />
                <ServiceCard name={'Wonderchef'} location={'https://www.google.com/maps/search/3rd+Morya+Appt.+Patil+Lane+No.+1+,+Behind+Mega+Bite,+Sweet+Mart+College+Road+,+Nashik+-+422005+direction/@20.0048401,73.768816,17z/data=!3m1!4b1?entry=ttu'} image={'Brand_img/Wonderchef.png'} contact={'12345647'} address={'3rd Morya Appt. Patil Lane No. 1 , Behind Mega Bite, Sweet Mart College Road , Nashik - 422005'} />
            </div>

            <div className='service_row'>
            <ServiceCard name={'Inalsa'} location={'https://www.google.com/maps/dir//C%2Fo+Om+Sai+Services+Shop+No+B-12,+Hari+Vihar+Society+Road,+near+Bacchav+Classes,+Narayan+Bapu+Nagar,+Shivaji+Nagar,+Nashik,+Maharashtra+422101/@19.9713344,73.7513862,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bddeb36851fe86f:0x698f7761b8edb44d!2m2!1d73.8337879!2d19.9713534?hl=en&entry=ttu'} image={'Brand_img/inalsa.png'} contact={'+91-2578221152'} address={' Nashik, Maharashtra, C/o Om Sai Services Shop No B-12, Hari Vihar Society Road, near Bacchav Classes, Narayan Bapu Nagar, Shivaji Nagar, Nashik, Maharashtra 422101'} />
            <ServiceCard name={'Philips'} location={'https://www.google.com/maps/search/3rd+Morya+Appt.+Patil+Lane+No.+1+,+Behind+Mega+Bite,+Sweet+Mart+College+Road+,+Nashik+-+422005+direction/@20.0048401,73.768816,17z/data=!3m1!4b1?entry=ttu'} image={'Brand_img/Phillips.png'} contact={'12345647'} address={'3rd Morya Appt. Patil Lane No. 1 , Behind Mega Bite, Sweet Mart College Road , Nashik - 422005'} />
                <ServiceCard name={'Cello'} location={'https://www.google.com/maps/search/3rd+Morya+Appt.+Patil+Lane+No.+1+,+Behind+Mega+Bite,+Sweet+Mart+College+Road+,+Nashik+-+422005+direction/@20.0048401,73.768816,17z/data=!3m1!4b1?entry=ttu'} image={'Brand_img/cello.png'} contact={'12345647'} address={'3rd Morya Appt. Patil Lane No. 1 , Behind Mega Bite, Sweet Mart College Road , Nashik - 422005'} />
            </div>

            <div className='service_row'>
            <ServiceCard name={'Milton'} location={'https://www.google.com/maps/dir//C%2Fo+Om+Sai+Services+Shop+No+B-12,+Hari+Vihar+Society+Road,+near+Bacchav+Classes,+Narayan+Bapu+Nagar,+Shivaji+Nagar,+Nashik,+Maharashtra+422101/@19.9713344,73.7513862,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bddeb36851fe86f:0x698f7761b8edb44d!2m2!1d73.8337879!2d19.9713534?hl=en&entry=ttu'} image={'Brand_img/milton.png'} contact={'+91-2578221152'} address={' Nashik, Maharashtra, C/o Om Sai Services Shop No B-12, Hari Vihar Society Road, near Bacchav Classes, Narayan Bapu Nagar, Shivaji Nagar, Nashik, Maharashtra 422101'} />
                <ServiceCard name={'Racold'} location={'https://www.google.com/maps/dir/20.0386411,73.8020553/New+CBS+(%E0%A4%A8%E0%A4%B5%E0%A5%80%E0%A4%A8+%E0%A4%AC%E0%A4%B8+%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE%E0%A4%A8%E0%A4%95),+Shop+No+2,+Bus+Stand,+Thakkar+Bazar+Complex,+behind+Maharashtra+Navanirman+Sena,+behind+Manase+Office,+Police+Staff+Colony,+Nashik,+Maharashtra+422003/@20.0176999,73.7711685,14z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bddebe0b2ee115f:0x6c72fdf8e43c3b3e!2m2!1d73.7800032!2d19.9972953!3e0?entry=ttu'} image={'Brand_img/racold.png'} contact={'708377549'} address={'696, Teli Gali, Raviwar Peth, Nashik, Maharashtra - 422001'} />
                <ServiceCard name={'Warmex'} location={'https://www.google.com/maps/search/3rd+Morya+Appt.+Patil+Lane+No.+1+,+Behind+Mega+Bite,+Sweet+Mart+College+Road+,+Nashik+-+422005+direction/@20.0048401,73.768816,17z/data=!3m1!4b1?entry=ttu'} image={'Brand_img/warmex.png'} contact={'12345647'} address={'3rd Morya Appt. Patil Lane No. 1 , Behind Mega Bite, Sweet Mart College Road , Nashik - 422005'} />
            </div>
        </div>
        
    </div>
  )
}

export default Service