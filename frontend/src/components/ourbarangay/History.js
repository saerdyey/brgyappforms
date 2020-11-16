import React from 'react';
import './History.css';
import HistoryPic from '../../img/home-pic1.jpg'

const History = () => {
    return(
        <div id="history">
            <div className="history-container">
                <h1>HISTORY</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis posuere aliquam. Suspendisse ut tempus velit. Cras blandit velit sit amet felis dapibus, id dictum risus ultricies. Aliquam ac augue ligula. Integer a tincidunt nibh. In ac aliquet velit. Curabitur sed enim tortor. Ut consectetur sagittis est, quis pretium sem tincidunt eget. Sed luctus, lorem vitae aliquet congue, leo nisi lacinia lacus, in congue turpis velit a tortor. Quisque accumsan porttitor odio, eu venenatis risus eleifend at. Fusce eget urna eu eros accumsan bibendum. Sed in magna ipsum. Fusce elementum dui vitae iaculis viverra. Donec ut est interdum turpis viverra auctor sit amet non quam. Morbi accumsan dui non diam dictum varius. Cras commodo tristique venenatis.</p>
                <p>Aenean in libero id nulla ultrices interdum. Aenean lacinia justo ac arcu pretium tempus. Duis commodo, purus vel gravida placerat, lectus ipsum facilisis neque, sollicitudin molestie arcu diam vitae augue. Etiam condimentum commodo leo volutpat porta. Vestibulum sed purus quis nulla dignissim aliquam placerat eget elit. Vivamus tempus tellus id augue tincidunt molestie. Pellentesque quis neque non erat egestas sodales. Sed viverra diam vel bibendum molestie. Donec tincidunt consequat facilisis. Nulla egestas egestas tincidunt. Etiam cursus, lorem at facilisis condimentum, erat mi tincidunt justo, ut maximus metus turpis nec nisl. Sed sit amet metus porta, feugiat risus aliquam, laoreet mauris.</p>
                <p>Vestibulum tincidunt vitae massa et consectetur. Vestibulum at metus ut ipsum scelerisque volutpat. Aliquam scelerisque, orci sed fermentum cursus, nibh justo congue enim, in sollicitudin lectus augue nec sapien. Integer in urna a sem ultricies semper tincidunt vel mauris. Morbi sed porttitor orci. Suspendisse luctus neque nibh, a vulputate est aliquet a. Quisque et eros a orci mattis malesuada.</p>
                <div className="history-pics">
                    <img src={HistoryPic} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default History;