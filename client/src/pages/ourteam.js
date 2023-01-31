import React from 'react'
import './ourteam.css';
import Downicon from '../icons/Down.svg'
import Closeicon from '../icons/Close.svg'
import Navbar from '../components/Navbar';
import Member from './member';
import anushka from '../PhotosPng/ankusha.png';
import krish from '../PhotosPng/krish.png';
import krishna from '../PhotosPng/krishna.png';
import mohitp from '../PhotosPng/mohitp.png';
import raghav from '../PhotosPng/raghav.png';
import sahil from '../PhotosPng/sahil.png';
import shyam from '../PhotosPng/shyam.png';
import souma from '../PhotosPng/souma.png';
import bhoomika from '../PhotosPng/bhomika.png';
import umang from '../PhotosPng/umang.png';
import ved from '../PhotosPng/ved.png';
import soham from '../PhotosPng/soham.png';
import Footer from '../components/Home/footer';
import Dropdown from './dropdown';
import teams from '../PhotosPng/team.png';
function OurTeam() {
    function myFunction() {
        console.log("Imrunning out");
        // document.getElementById("img1").src = "assets/img/Close.svg";
        var x = document.getElementById("img123");
        console.log(Downicon);


        if (x.src == { Downicon }) {
            console.log("Imrunning in");
            x.src = Closeicon
        }
        if (x.src == Closeicon) {
            console.log("Imrunning in");
            x.src = Downicon
        }
    }


    return (
        <>
            <div className='teampage'><Navbar />
                <div className="topallmembers">
                    <h1>MEET THE TEAM</h1>
                </div>
                <div className='teamC' >
                    <Member name="Umang Jain" pos="Convener" img={umang} link="https://www.linkedin.com/in/umang1821/" />
                    <Member name="Krishna Khakholia" pos="Secretary" img={krishna} link="https://www.linkedin.com/in/kkhakholia841/" />
                    <Member name="Sahil Nizam" pos="Coordinator" img={sahil} link="https://www.linkedin.com/in/sahilnizam12/" />
                    <Member name="Vedaprakash Rajan" pos="Design Head" img={ved} link="https://www.linkedin.com/in/vedaprakashr/" />
                    <Member name="Anushka Gandhi" pos="Design Head" img={anushka} link="https://www.linkedin.com/in/anushka-gandhi-4b99b4217/" />
                    <Member name="Krish Rajpal" pos="Disrupt Head" img={krish} link="https://www.linkedin.com/in/krish-rajpal-b60310209/" />
                    <Member name="Raghav Mittal" pos="Initiatives Head" img={raghav} link="https://www.linkedin.com/in/raghavmittal123/" />
                    <Member name="Shyam D" pos="Corporate Relations Head" img={shyam} link="https://www.linkedin.com/in/shyamd007/" />
                    {/* <Member name="Soumadip Das" pos="WebOps Head" img={souma} link="https://www.linkedin.com/in/soumadip-das/" /> */}
                    <Member name="Mohit Pal" pos="PMx Head" img={mohitp} link="https://www.linkedin.com/in/mohitpal01/" />
                    <Member name="Soham Parundekar" pos="PR and Branding Head" img={soham} link="https://www.linkedin.com/in/sohamparundekar/" />
                    <Member name="Bhoomika Dhaka" pos="GnS Head" img={bhoomika} link="https://www.linkedin.com/in/bhoomikdhaka12/" />
                </div>

                <div id="teamD">

                    <Dropdown team="DEVELOPERS" img={teams} text={[
                        <ul>
                            <li> <a href='https://www.linkedin.com/in/anurag85/' target='_blank'> Anurag Kushwah</a></li>
                            <li><a href='https://www.linkedin.com/in/divyesh-vankar/' target='_blank'>Divyesh Vankar</a></li>
                            <li><a href='https://www.linkedin.com/in/himanshi-g/' target='_blank'> Himanshi Gautam</a></li>
                            <li><a href='https://www.linkedin.com/in/priyansh-shrivastav/?trk=public_profile_samename-profile&originalSubdomain=in' target='_blank'> Priyansh Shrivastav</a></li>
                            <li> <a href='https://www.linkedin.com/in/iks1r/' target='_blank'> Raj Borogaon</a></li>
                        </ul>
                    ]} />
                    <Dropdown team="DESIGN" img={teams} text={[
                        <ul>
                            <li>Amey Karekar</li>
                            <li>Anubhab Sahoo</li>
                            <li>Kavinas</li>
                            <li>Manajit Saha</li>
                            <li>Netra pujar</li>
                            <li>Pratham</li>
                            <li>Sanbarto Mondal</li>
                            <li>Shantanu Chaudhari</li>
                            <li>Susanna Joseph </li>
                            <li>Vedhant Krishi S </li>
                            <li>Yash chauhan</li>
                            <li>Viknesh Surya SS</li>
                        </ul>
                    ]} />

<Dropdown team="DISRUPT" img={teams} text={[
                        <ul>
                            <li>Abhishek Gupta</li>
                            <li>Aditya Gupta</li>
                            <li>Aniba</li>
                            <li>Anurag Kushwah</li>
                            <li>Gargi goyal</li>
                            <li>Lakshya patel</li>
                            <li>Raveena Kumari</li>
                            <li>Rohak Jain</li>
                            <li>Shlok Agrawal</li>
                            <li>Shubhankit Acharya</li>
                            <li>Zainab Ali</li>
                            <li>Tejas Tendulkar</li>
                        </ul>
                    ]} />

                    <Dropdown team="TEAM INITIATIVES" img={teams} text={[
                        <ul>
                            <li>Akshita Swarnkar</li>
                            <li>Anshika Meshram</li>
                            <li>Astha Gupta</li>
                            <li>Chhandam Pal</li>
                            <li>Dipit Patowari</li>
                            <li>Hrushikesh Koppula</li>
                            <li>Pallavi R Gowda</li>
                            <li>Parth Sunilkumar Songire</li>
                            <li>Raunit Singh</li>
                            <li>Rishika Saria</li>
                            <li>Sakshi Mahesh Sakhare </li>
                            <li>Shubhechha Mondal </li>
                            <li>Shuvrajit Deb Roy</li>
                        </ul>
                    ]} />

                    <Dropdown team="INTERNFAIR" img={teams} text={[
                        <ul>
                            <li>
                                Ankit Kumar Mahanta
                            </li>
                            <li>
                                Aryan Lath
                            </li>
                            <li>
                                Aryan Solanki
                            </li>
                            <li>Disha Agarwal</li>
                            <li>Harshal Joshi</li>
                            <li>Kishlay Soni</li>
                            <li>Navin Patwari</li>
                            <li>Pratima Tomar</li>
                            <li>Rakshit Dahiya</li>
                            <li>Rashmi Bajaj</li>
                            <li>Ravi Kumar Saini</li>
                        </ul>

                    ]} />

                    <Dropdown team="LECTURE SERIES" img={teams} text={[

                        <ul>
                            <li>Ashish Motwani </li>
                            <li>Divyesh Vankar</li>
                            <li>Himanshi Gautam</li>
                            <li>Isha kharkia </li>
                            <li>Nandini Priya </li>
                            <li>Priyansh Shrivastav</li>
                            <li>Rahul Vivek</li>
                            <li>Raj Borogaon</li>
                            <li>Ronit Kumar Kaushik</li>
                            <li>Suman Meena</li>
                        </ul>
                    ]} />


                    <Dropdown team="MARKETING" img={teams} text={[
                        <ul>
                            <li>Abhishek Dwivedi</li>
                            <li>Akhilesh Gupta</li>
                            <li>Aman Raghuvanshi</li>
                            <li>Dipanshu Goyal</li>
                            <li>Govind Madhav Vyas</li>
                            <li>Om Kumar Saini</li>
                            <li>Priyanshu Sinha</li>
                            <li>Ranjan Kumar</li>
                            <li>Ravi Raj</li>
                            <li>Rimjim Dewan</li>
                            <li>Ritika Rege</li>
                            <li>Swastik Swaroop</li>
                        </ul>
                    ]} />

                    <Dropdown team="NEED" img={teams} text={[
                        <ul>
                            <li>Balaji</li>
                            <li>Dhushyanthan K</li>
                            <li>G Adarsh Mani </li>
                            <li>G.Meghana</li>
                            <li>Harsh Diwaker</li>
                            <li>Harshit garg </li>
                            <li>Kayra Reying Pao</li>
                            <li>Khushi Bothra</li>
                            <li>Shikhar Sharma </li>
                            <li>Shivam Gupta </li>
                            <li>Suhani Kalra</li>
                        </ul>
                    ]} />

                    <Dropdown team="PMx" img={teams} text={[
                        <ul>
                            <li>Amlan Biswal </li>
                            <li>Kanike Uday</li>
                            <li>Nityam Pareek</li>
                            <li>Poorva Upman</li>
                            <li>Rajat Patodi</li>
                            <li>Sistla gayatri</li>
                            <li>Shivam Agrawal</li>
                            <li>Sneha Singh </li>
                        </ul>
                    ]} />

                   

                    <Dropdown team="GnS" img={teams} text={[
                        <ul>
                            <li>Anubrata Saha </li>
                            <li>Bhaskar dev </li>
                            <li>Drishti Agarwal</li>
                            <li>Jash Muni </li>
                            <li>Keerthana</li>
                            <li>Naman Sethiya </li>
                            <li>Piyush vaish</li>
                            <li>Shruti Raj</li>
                            <li>Sumit Nayan</li>
                            <li>Yeshudan Bora </li>
                        </ul>
                    ]} />

                </div>



                <Footer />
            </div>


        </>
    );
}

export default OurTeam;
