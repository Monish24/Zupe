<template>
    <div class="dashboard">
        <div class="content-container">
            <div class="partitions">
                <div class="partition-mp-profile"></div>
                <div class="partition-top"></div>
                <div class="partition-1-2"></div>
                <div class="partition-2-3"></div>
                <div class="partition-3-4"></div>
                <div class="partition-4-5"></div>
                <div class="partition-5-6"></div>
                <div class="partition-6-7"></div>
                <div class="partition-7-8"></div>
                <div class="partition-8-9"></div>
                <div class="partition-9-10"></div>
                <div class="partition-10-11"></div>
            </div>
            <div class="mp-profile-container">
                <div class="monthly-playlist-container">
                    <div class="mp-label">
                        <div class="mpl-main-text">
                            YOUR MONTHLY PLAYLIST
                        </div>
                        <div class="mpl-sub-text">
                            This is your monthly playlist that is made <br>
                            especially for you by <span class="Zupe-word">Zupe</span>, made of songs that <br>
                            We think you might love to listen! 
                        </div>
                    </div>
                    <div class="mp-card">
                        <span class="mp-img">
                            <img :src="testurl1" height="187px" width="187px">
                        </span>
                        <div class="mp-text-container">    
                            <span class="mp-main-text">
                                Cigarette Daydreams<br>
                            </span>
                            <span class="mp-sub-text">
                                Cage the elephant
                            </span> 
                        </div>
                    </div>
                </div>
                <div class="profile-container">
                    <div class="user-info-container">
                        <div class="usnc">
                            <fitty :options="options">
                               <template v-slot:content>       
                                Monish Shah
                                </template>
                            </fitty>
                        </div>
                        <div class="secondary-info">
                          11 Playlists • 555555 Hours Spent
                        </div>
                    </div>
                    <div class="open-profile">
                      <button class="opBtn">Open Profile</button>
                    </div>
                    <div class="profile-picture">
                      <img src="@/assets/img/placeholder.png" height="200px" width="200px" alt="PP">
                    </div>
                </div>
            </div>
            <div class="cardsgrid-container">
                <div class="cardsgrid-labels">
                    <div class="cgt1">
                        <span class="title-txt">
                            NEW <br>
                            RELEASES
                        </span>
                    </div>
                    <div class="cgt2">
                        <span class="title-txt">
                            BEST OF <br>
                            ARTISTS
                        </span>
                    </div>
                    <div class="cgt3">
                        <span class="title-txt">
                            CAGE THE <br>
                            ELEPHANT                            
                        </span>
                    </div>
                    <div class="cgt4">
                        <span class="title-txt">
                            MORE LIKE <br>
                            NIRVANA
                        </span>
                    </div>
                    <div class="cgt5">
                        <span class="title-txt">
                            INDIE <br>
                            ARTISTS
                        </span>
                    </div>
                    <div class="cgt6">
                        <span class="title-txt">
                            ROCK <br>
                            ARTISTS
                        </span>
                    </div>
                    <div class="cgt7">
                        <span class="title-txt">
                            ALT <br>
                            ARTISTS
                        </span>
                    </div>
                    <div class="cgt8">
                        <span class="title-txt">
                            MORE OF WHAT <br>
                            YOU LIKE
                        </span>
                    </div>
                    <div class="cgt9">
                        <span class="title-txt">
                            POP <br>
                            BESTS
                        </span>
                    </div>
                    <div class="cgt10">
                        <span class="title-txt">
                            MOOD
                        </span>
                    </div>
                    <div class="cgt11">
                        <span class="title-txt">
                            CHARTS
                        </span>
                    </div>
                </div>
                <div class="cardsgrid">
                    <div class="cardsgrid-g1">
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                    </div>
                    <div class="cardsgrid-g2">
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                    </div>
                    <div class="cardsgrid-g3">
                        <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                    </div>
                    <div class="cardsgrid-g4">
                        <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                    </div>
                    <div class="cardsgrid-g5">
                        <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                    </div>
                    <div class="cardsgrid-g6">
                        <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                    </div>
                    <div class="cardsgrid-g7">
                        <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                    </div>
                    <div class="cardsgrid-g8">
                        <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                    </div>
                    <div class="cardsgrid-g9">
                        <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                    </div>
                    <div class="cardsgrid-g10">
                        <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                    </div>
                    <div class="cardsgrid-g11">
                        <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="icg1">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                         </div>
                         <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                        <div class="cg-container">
                             <span class="mp-img">
                                 <img :src="testurl1" height="187px" width="187px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  Cigarette Daydreams<br>
                                </span>
                                <span class="mp-sub-text">
                                  Cage the elephant
                                </span>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>       
        <div>

        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';

@Component({
  layout: "contentarea"
})

export default class Dashboard extends Vue{
    private testurl1="https://i.scdn.co/image/ab67616d00001e02fbc71c99f9c1296c56dd51b6"
    private options={
        minSize: 1,
        maxSize: 60,
      }
}

</script>

<style>
@font-face {
  font-family: "spoof";
  src: url("../assets/Spoof-Regular.ttf");
  font-weight: 200;
}

html{
    background: #2e2a3a;
}

.content-container{
    overflow-y: scroll;
    display: block;
    width: 1859px;
    height: 896px;
    position: fixed;
    top: 0px;
    left: 30px;
}

.Zupe-word{
    color: #ffeea9;
}

.partition-mp-profile{
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 275px;
    height: 0px;
    position: relative;
    top: 156px;
    left: 900px;
    z-index: 0;
}

.partition-top{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 310px;
    left: 25px;
    z-index: 0;
}

.partition-1-2{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 703px;
    left: 25px;
    z-index: 0;
}

.partition-2-3{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 1099px;
    left: 25px;
    z-index: 0;
}

.partition-3-4{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 1485px;
    left: 25px;
    z-index: 0;
}

.partition-4-5{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 1879px;
    left: 25px;
    z-index: 0;
}

.partition-5-6{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 2266px;
    left: 25px;
    z-index: 0;
}

.partition-6-7{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 2659px;
    left: 25px;
    z-index: 0;
}

.partition-7-8{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 3051px;
    left: 25px;
    z-index: 0;
}

.partition-8-9{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 3443px;
    left: 25px;
    z-index: 0;
}

.partition-9-10{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 3834px;
    left: 25px;
    z-index: 0;
}

.partition-10-11{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 4220px;
    left: 25px;
    z-index: 0;
}

.mp-profile-container{
    display: flex;
    position: relative;
    top: 0px;
    left: 0px;
    width: 1859px;
    height: 320px;
}

.cardsgrid-container{
    display: flex;
    position: relative;
    top: 0px;
    left: 0px;
    width: 1859px;
    height: 3000px;
}

.cardsgrid-labels{
    position: relative;
    top: 0px;
    left: 0px;
    width: 300px;
    height: 3000px;
}

.title-txt{
    font-family: "spoof";
    color: white;
    font-size: 60px;
    text-align: center;
    align-self: center;
    position: relative;
    top: 40px;
    left: 0px;
}

.cgt1{
    text-align: center;
    position: relative;
    top: 70px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt2{
    text-align: center;
    position: relative;
    top: 190px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt3{
    text-align: center;
    position: relative;
    top: 336px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt4{
    text-align: center;
    position: relative;
    top: 473px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt5{
    text-align: center;
    position: relative;
    top: 618px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt6{
    text-align: center;
    position: relative;
    top: 770px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt7{
    text-align: center;
    position: relative;
    top: 907px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt8{
    text-align: center;
    position: relative;
    top: 1013px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt9{
    text-align: center;
    position: relative;
    top: 1200px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt10{
    text-align: center;
    position: relative;
    top: 1360px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt11{
    text-align: center;
    position: relative;
    top: 1500px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cardsgrid{
    position: relative;
    margin-top: 24px;
    margin-left: 60px;
    top: 0px;
    left: 0px;
    width: 1605px;
}

.mp-label{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 727px;
    height: 240px;
    position: absolute;
    top: 14px;
    left: 280px;
}

.mpl-main-text{
    font-family: "spoof";
    font-size: 60px;
    color: white;
}

.mpl-sub-text{
    padding-left: 10px;
    font-family: "spoof";
    font-size: 16px;
    color: white
}

.mp-card{
    overflow: hidden;
    background: #423F4D;
    border-radius: 5px;
    margin-top: 12.5px;
    margin-left: 60px;
    display: flex;
    width: 187px;
    height: 263px;
    position: relative;
    top: 0px;
    left: 0px;
}

.mp-text-container{
    padding-top: 9px;
    text-align: center;
    color: white;
    font-family: "spoof";
    align-items: center;
    width: 187px;
    height: 80px;
    position: absolute;
    top: 187px;
    background: #817F88;
}

.mp-main-text{
    vertical-align: middle;
    position: relative;
    font-size: 16px;
    color: white;
}

.mp-sub-text{
    vertical-align: middle;
    position: relative;
    font-size: 12px;
    color: lightgray;
}

.user-info-container{
    width: 377px;
    height: 260px;
    position: absolute;
    top: 14px;
    left: 1080px;
}

.usnc{
    color: white;
    display: flex;
    font-size: 60px;
    font-family: "spoof";
}

.secondary-info{
  width: 360px;
  height: 24px;
  font-family: "spoof";
  font-size: 14px;
  color: white;
  position: relative;
  top: 10px;
  left: 5px;
}

.opBtn{
  position: relative;
  top: 220px;
  left: 843px;
  background-color: grey;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: "spoof";
  border-radius: 3px;
  width: 150px;
  height: 30px;
}

.profile-picture{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 1550px;
  top: 44px;
  border-radius: 50%;
  overflow: hidden;
}

.cg-container{
    overflow: hidden;
    background: #423F4D;
    border-radius: 5px;   
    display: flex;
    position: relative;
    width: 187px;
    height: 263px;
}

.songinfo-cg{
    padding-top: 9px;
    text-align: center;
    color: white;
    font-family: "spoof";
    width: 187px;
    height: 80px;
    position: absolute;
    top: 187px;
    background: #817F88;
}

.cardsgrid-g1{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1217px;
    height: 272px;
    position: relative;
    top: 24px;
    left: 35px;
}

.cardsgrid-g2{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1217px;
    height: 272px;
    position: relative;
    top: 144px;
    left: 35px;
}

.cardsgrid-g3{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1217px;
    height: 272px;
    position: relative;
    top: 264px;
    left: 35px;
}

.cardsgrid-g4{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1217px;
    height: 272px;
    position: relative;
    top: 384px;
    left: 35px;
}

.cardsgrid-g5{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1217px;
    height: 272px;
    position: relative;
    top: 504px;
    left: 35px;
}

.cardsgrid-g6{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1217px;
    height: 272px;
    position: relative;
    top: 624px;
    left: 35px;
}

.cardsgrid-g7{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1217px;
    height: 272px;
    position: relative;
    top: 744px;
    left: 35px;
}

.cardsgrid-g8{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1217px;
    height: 272px;
    position: relative;
    top: 864px;
    left: 35px;
}

.cardsgrid-g9{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1217px;
    height: 272px;
    position: relative;
    top: 984px;
    left: 35px;
}

.cardsgrid-g10{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1217px;
    height: 272px;
    position: relative;
    top: 1104px;
    left: 35px;
}

.cardsgrid-g11{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1217px;
    height: 272px;
    position: relative;
    top: 1224px;
    left: 35px;
}

</style>