import React from 'react';
import blog1 from "../../Assets/Images/blog1.jpg";
import './BlogDetail.scss';


const BlogDetail = () => {
    return (
        <div className="bn-sec blog-detail">
            <div className='blog-detail-wrapper'>
                <img className="blog-img" src={blog1} alt="blog img" />
                <div className="blog-content">
                    <h2 className="blog-title">How Creatine Helps You Gain Muscle and Strength</h2>
                    <div className='blog-text'>
                        <div>
                            Burly Creatine Monohydrate is an ultimate workout supplement that is sure to boost your workout performance. It is an ideal source
                            of pure and unadulterated creatine monohydrate. Every serving of this creatine supplement provides 3g of unadulterated creatine which
                            is instantly absorbed by the body, providing a constant supply of energy by resynthesizing ADPs into ATPs (the energy currency) of your body.
                            Regular consumption of Burly Creatine Monohydrate allows you to sustain longer in the gym and attain lean muscle mass. If you are into
                            hardcore training and heavy weightlifting, creatine is just the right supplement to be included in your diet. Here are some
                            <span className='blog-sub-bold'>Benefits of Creatine:</span>
                        </div>

                        <div>
                            <span className='blog-bold'>1. Enhanced muscle strength and power:</span> Creatine supplementation can increase phosphocreatine
                            stores in muscles, which helps regenerate ATP (adenosine triphosphate), the primary energy source for short, high-intensity
                            activities like weightlifting and sprinting. This can lead to improved strength and power output during workouts.
                        </div>
                        <div>
                            <span className='blog-bold'>2. Increased muscle mass: </span> Some studies suggest that creatine supplementation,
                            when combined with resistance training, can promote greater gains in lean muscle mass compared to resistance training alone.
                        </div>
                        <div>
                            <span className='blog-bold'>3. Improved exercise performance: </span>Creatine may benefit various types of athletic performance,
                            including high-intensity interval training, sprinting,
                            and activities that require short bursts of intense effort.
                        </div>
                        <div>
                            <span className='blog-bold'>4. Faster muscle recovery: </span>It may help reduce muscle damage and inflammation after intense exercise,
                            leading to quicker recovery between workouts.
                        </div>
                        <div>
                            <span className='blog-bold'>5. Potential treatment for certain medical conditions: </span> Creatine supplementation has shown promise
                            in mitigating symptoms in certain medical conditions like Parkinson's disease, muscular dystrophy, and traumatic brain injury, although
                            further research is needed in these areas.
                            <div>
                                The timing of creatine consumption isn't as critical as consistency in taking it daily. However, there are a few common recommendations:
                                <div>
                                    <span className='blog-sub-bold'>- Pre or Post-Workout: </span> Some people prefer taking creatine around their workout times.
                                    Pre-workout consumption may help saturate muscles with creatine before exercise, while post-workout intake could aid in replenishing
                                    creatine stores after training.
                                </div>
                                <div>
                                    <span className='blog-sub-bold'>- Consistency Matters: </span>The most important aspect is consistency in taking creatine.
                                    Daily supplementation helps maintain higher creatine levels in muscles, allowing for its potential performance benefits over time.
                                </div>
                                <div>
                                    <span className='blog-sub-bold'>- Personal Preference: </span>Ultimately, the best time to take creatine is the time that suits your routine and ensures you remember to take it consistently.
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
