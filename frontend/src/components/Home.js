import '../assets/main.css';
import '../assets/surveyDef.js'
import { useNavigate } from 'react-router-dom'
import dist_first from '../assets/imgs/dist_first.png'
import db from '../assets/imgs/db.png'
import gb from '../assets/imgs/gb.png'
import vis from '../assets/imgs/vis.png'
import auprc from '../assets/imgs/auprc.png'
import first_fm from '../assets/imgs/first_fm.png'

function Home() {
    const navigate = useNavigate()
    return (
        <div>
        <div className='container-lg  pt-5 pb-5 pt-lg-6'>
            <h1 className="ls-tight font-bolder display-6 mb-5">Overview</h1>
            <hr />
            <div className="bg-white position-relative d-flex p-2 rounded shadow-sm mb-4" role="alert">
                <div className="w-1 bg-success rounded-pill" />
                <div className="ms-4 py-2 d-flex">
                    <div className="">
                        <span className="d-block font-semibold text-heading">Origines</span>
                        <p className="text-sm">
                            This project is based on a preprocessed dataset stemming from the ANQ, a LightGBM model has been trained on a total of around
                            150'000 clinical cases from all over Switzerland. Based on medical (e.g. HoNOS, diagnosis), social and admission (e.g. forced admission, dropout)
                            data taken at entry, we aim to predict the overall risk of coercive measures. Details regarding the datasets can be found <a style={{ display: "inline-block" }} href="https://www.anq.ch/wp-content/uploads/2017/12/ANQ_PSY_EP_Auswertungskonzept.pdf" className="alert-link">here</a>.
                        </p>
                    </div>
                </div> 
            </div>


            <br></br>
            <br></br>
                <div class="flex justify-between">
                    <div class="relative w-[600px] border-2">
                        <img class="w-full object-cover"
                            src={first_fm} />
                        <div
                            className=" absolute top-0 left-0 border-2 border-green-900 border-opacity-50 w-full h-0 flex flex-col justify-center items-center bg-green-800 bg-opacity-50 hover:h-full duration-500">
                            <h1 class=" text-xl opacity-100 text-white">Overall delay (hours) until the first measures</h1>
                            <p class=" px-8 text-center text-white">Missing entry hours were set to midnight. <br></br>
                            Negative delays (e.g. due to coercion during transport) were set to zero. <br></br>
                            Note that the graph only shows the first 48 hours following admission.  </p>
                            <h6 class="mt-5 px-8 py-3 text-white rounded-full bg-black bg-opacity-50 duration-300" >Expand</h6>
                        </div>
                    </div>
                    <div class="relative w-[600px] border-2">
                        <img class="w-full object-cover"
                            src={auprc} />
                        <div
                            className=" absolute top-0 left-0 border-2 border-green-900 border-opacity-50 w-full h-0 flex flex-col justify-center items-center bg-green-800 bg-opacity-50 hover:h-full duration-500">
                            <h1 class=" text-xl opacity-100 text-white">AUPRC score of our model</h1>
                            <p class=" px-8 text-center text-white">Based on a high class imbalance of around 8%, and a binary target specifying whether our samples (clinical cases) endured at least one measure during their stay.  </p>
                            <h6 class="mt-5 px-8 py-3 text-white rounded-full bg-black bg-opacity-50 duration-300" >Expand</h6>
                        </div>
                    </div>
                </div>

            <br></br>
            <br></br>
            <div className="bg-white position-relative d-flex p-2 rounded shadow-sm mb-4" role="alert">
                <div className="w-1 bg-success rounded-pill" />
                <div className="ms-4 py-2 d-flex">
                    <div className="">
                        <span className="d-block font-semibold text-heading">Structure</span>
                        <p className="text-sm">
                            Prediction are based on a survey, where users may enter data regarding the patient. It is important that a first review of the patient's state has taken place,
                            however since missing data have been shown to often have an important impact on the risk of coercion due to the underlying grounds,
                            they should be specified as such (i.e. by leaving the question blank). Ideally, the test should be performed as close as possible to the admission date
                            (this due to the fact that the model has only been tested using data taken at admission). After filling out the survey, the user is redirected to a dashboard where the
                            test results are shown, the user is then free to analyse results from other tests (from the same or other patients), perform additional tests on the same subject and compare
                            results in the dashboard. A display of the database containing all tests resuls and data is also available.

                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-between" >
                <div class="relative w-[300px]">
                    <img src={gb} />
                    <div style={{ cursor: "pointer" }} onClick={() => { navigate('/Prediction') }} class="transform opacity-70 bg-green-100  absolute bottom-0 left-0 right-0 px-4 py-0">
                        <h3 class="hover:opacity-100 text-xl text-black font-bold">
                            Survey</h3>
                        <p class="mt-2 text-sm text-black">Machine learning predictor</p>
                    </div>
                </div>
                <div class="relative w-[300px]">
                    <img src={vis} />
                    <div style={{ cursor: "pointer" }} onClick={() => { navigate('/Analytics') }} class="transform opacity-70 bg-green-100  absolute bottom-0 left-0 right-0 px-4 py-0">
                        <h3 class="hover:opacity-100 text-xl text-black font-bold">
                            Analytics</h3>
                        <p class="mt-2 text-sm text-black">Visualisation of results</p>
                    </div>
                </div>
                <div class="relative w-[210px]">
                    <img src={db} />
                    <div style={{ cursor: "pointer" }} onClick={() => { navigate('/Database') }} class="transform opacity-70 bg-green-100  absolute bottom-0 left-0 right-0 px-4 py-0">
                        <h3 class="hover:opacity-100 text-xl text-black font-bold">
                            Database</h3>
                        <p class="mt-2 text-sm text-black">Retrieve all tests</p>
                    </div>
                </div>
            </div>


        </div>


        </div>

    )
}

export default Home
