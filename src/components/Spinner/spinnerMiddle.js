import React from 'react';
import './spinnerMiddleStyle.css';

class SpinnerMiddle extends React.Component {
    constructor(props) {
        super(props);

        this.menus = [];
        this.main_data = [];

        if (this.props.info.length == 0) this.menus = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
        else {
            this.props.info.forEach(
                (obj) => {
                    this.main_data.push(obj);
                    if (obj.length > 19) this.menus.push(obj.slice(0, 19) + '...');
                    else {
                        this.menus.push(obj);
                    }

                }
            );
        }
        if (this.menus.length < 8) {
            this.menus = this.makeRepeated(this.menus, parseInt(7 / this.menus.length) + 1);
            this.main_data = this.makeRepeated(this.main_data, parseInt(7 / this.main_data.length) + 1);
        }
    }

    makeRepeated = (arr, repeats) => {
        return Array.from({ length: repeats }, () => arr).flat();
    }

    isClicked = (event) => {
        let data = JSON.parse(event.getAttribute('data-objs'));
        if (data !== '-') {
            let bg_color = window.getComputedStyle(event.parentNode).getPropertyValue('background-color');
            document.getElementById('middle_').style.backgroundColor = bg_color;
            this.props.handleClick(data, bg_color);
        }
    }

    positioning = () => {
        let spinner = document.getElementById('menu_nav');
        let del = parseInt(window.innerWidth) - parseInt(spinner.offsetWidth);
        spinner.style.left = del / 2 + "px";
    }


    componentDidMount() {

        var total = this.menus.length;
        var lastIndex = total - 1;
        var prevId = 5;
        var prevIndex = 4;
        var nextId = 7;
        var nextIndex = lastIndex;
        var rotate = 0;

        // Positioning
        this.positioning();
        window.addEventListener("resize", this.positioning);

        for (let i = 0; i < 4; i++) {
            let a_element = document.getElementById(`a-${i}`);
            a_element.innerHTML = this.menus[i];
            a_element.setAttribute('data-objs', JSON.stringify(this.main_data[i]));
            a_element.addEventListener('click',
                (e) => {
                    this.isClicked(e.currentTarget);
                }
            );
        }

        document.querySelectorAll('div.spinner-middle-cont ul.circle li a.over').forEach((e) => {
            updateCurvedText(e, 250);
        });


        document.getElementById('prev_btn2').addEventListener('click', () => {
            rotate -= 52;
            let rtext = 'rotate(' + rotate + 'deg)';
            document.getElementById('menu_nav').style.transform = rtext;

            var text = this.menus[prevIndex];
            text = `<a class="over" id="a-${prevIndex}" href="javascript:void(0)">${text}</a>`;
            document.getElementById('mm-' + prevId).innerHTML = text;

            let anchor = document.getElementById(`a-${prevIndex}`);
            anchor.setAttribute('data-objs', JSON.stringify(this.main_data[prevIndex]));
            anchor.addEventListener('click',
                (e) => {
                    this.isClicked(e.currentTarget);
                }
            );


            updateCurvedText(document.getElementById(`a-${prevIndex}`), 250);
            prevId++;
            if (prevId == 8) {
                prevId = 1;
            }
            prevIndex++;
            if (prevIndex > lastIndex) {
                prevIndex = 0;
            }

            // Next Index Adjust
            nextIndex++;
            if (nextIndex > lastIndex) {
                nextIndex = 0;
            }
            //Next Id Adjust
            nextId++;
            if (nextId == 8) {
                nextId = 1;
            }

        });

        document.getElementById('next_btn2').addEventListener('click', () => {
            rotate += 52;
            let rtext = 'rotate(' + rotate + 'deg)';

            document.getElementById('menu_nav').style.transform = rtext;

            var text = this.menus[nextIndex];
            //text = text.replaceAll(' ','<br>');
            text = `<a class="over" id="a-${nextIndex}" href="javascript:void(0)">${text}</a>`;
            document.getElementById('mm-' + nextId).innerHTML = text;

            let anchor = document.getElementById(`a-${nextIndex}`);
            anchor.setAttribute('data-objs', JSON.stringify(this.main_data[nextIndex]));
            anchor.addEventListener('click',
                (e) => {
                    this.isClicked(e.currentTarget);
                }
            );


            updateCurvedText(document.getElementById(`a-${nextIndex}`), 250);
            nextId--;
            nextIndex--;
            if (nextId == 0) {
                nextId = 7;
            }
            if (nextIndex < 0) {
                nextIndex = lastIndex;
            }
            // Prev Index Adjust
            prevIndex--;
            if (prevIndex < 0) {
                prevIndex = lastIndex;
            }
            //Next Id Adjust
            prevId--;
            if (prevId == 0) {
                prevId = 7;
            }
        });

        function updateCurvedText(curvedText, radius) {

            curvedText.style.minWidth = "initial";
            curvedText.style.minHeight = "initial";

            var w = curvedText.offsetWidth,
                h = curvedText.offsetHeight;

            curvedText.style.minWidth = w + "px";
            curvedText.style.minHeight = h + "px";

            var text = curvedText.innerText;
            var html = "";

            Array.from(text).forEach((letter) => {
                html += `<span>${letter}</span>`;
            });

            curvedText.innerHTML = html;

            var letters = curvedText.getElementsByTagName("span");
            letters = Array.prototype.slice.call(letters);


            var angleRad = w / (2 * radius);
            var angle = 2 * angleRad * 180 / Math.PI / text.length;
            var idx = 0;

            letters.forEach(
                (e) => {
                    e.style.position = "absolute";
                    e.style.height = `${radius}px`;
                    e.style.transformOrigin = "bottom center";
                    e.style.transform = `translate(${w / 2}px,0px) rotate(${idx * angle - text.length * angle / 2}deg)`;
                    idx++;
                }
            );
        }


        document.querySelectorAll('div.spinner-middle-cont ul.circle li label.circle').forEach((e) => {
            e.addEventListener('click', () => {
                document.querySelectorAll('div.spinner-middle-cont ul.circle li label.circle').forEach(
                    (el) => {
                        el.classList.remove('active');
                    }
                );
                e.classList.add('active');
            });
        });

        var lastChange = new Date();
        document.querySelectorAll('.menu-navigate .btn').forEach(
            (e) => {
                e.addEventListener('click', () => {
                    lastChange = new Date();
                });
            }
        );



        setInterval(() => {
            var newDate = new Date();
            var diff = newDate.getTime() - lastChange.getTime();
            if (diff > 10000) {
                document.querySelectorAll('menu_nav .menu-navigate .btn').forEach(
                    (e) => {
                        e.classList.add('highlight');
                    }
                );
                lastChange = new Date();
            }
            window.setTimeout(() => {
                document.querySelectorAll('#menu_nav .menu-navigate .btn').forEach(
                    (e) => {
                        e.classList.remove('highlight');
                    }
                );
            }, 800);
        }, 1000);
    }


    render() {
        return (
            <div>
                <nav className="menunav" id='menu_nav'>
                    <ul className="circle">

                        <li className="coconut light slice">
                            {/* Menu labels */}
                            <label htmlFor="ococonut" className="circle over" id="mm-1">
                                <a className="over" id='a-0' href="javascript:void(0)" data-objs={JSON.stringify(this.props.info[0])}>-
                                </a>
                            </label>
                        </li>

                        <li className="vanilla light slice">
                            {/* Menu labels */}
                            <label htmlFor="ovanilla" className="circle over" id="mm-2">
                                <a className="over" id='a-1' href="javascript:void(0)" data-objs={JSON.stringify(this.props.info[1])}>-
                                </a>
                            </label>
                        </li>

                        <li className="orange light slice" >
                            {/* Menu labels */}
                            <label htmlFor="oorange" className="circle over" id="mm-3">
                                <a className="over" id='a-2' href="javascript:void(0)" data-objs={JSON.stringify(this.props.info[2])}>-</a>
                            </label>
                        </li>

                        <li className="almond light slice"  >
                            {/* Menu labels */}
                            <label htmlFor="oalmond" className="circle over" id="mm-4">
                                <a className="over" id='a-3' href="javascript:void(0)" data-objs={JSON.stringify(this.props.info[3])}>-</a>
                            </label>
                        </li>

                        <li className="grape light slice"  >
                            {/* Menu labels */}
                            <label htmlFor="ogrape" className="circle over" id="mm-5">
                                <a className="over" id='a-4' href="javascript:void(0)">5 </a>
                            </label>
                        </li>

                        <li className="blackberry light slice"  >
                            {/* Menu labels */}
                            <label htmlFor="oblackberry" className="circle over" id="mm-6">
                                <a className="over" id='a-5' href="javascript:void(0)">6</a>
                            </label>
                        </li>

                        <li className="cherry light slice"  >
                            {/* Menu labels */}
                            <label htmlFor="ocherry" className="circle over" id="mm-7">
                                <a className="over" id='a-6' href="javascript:void(0)">7 </a>
                            </label>
                        </li>

                        <li className="unsel circle">
                            <label htmlFor="unsel" className="clicky menuname" />
                        </li>
                        <li className="middle circle" id='middle_' />
                    </ul>

                </nav>
                <div className="col-md-12">
                    <div className="menu-navigate">
                        <button className="btn" id="prev_btn2"> <i className="fa fa-angle-left" /> </button>
                        <button className="btn" id="next_btn2"> <i className="fa fa-angle-right" /> </button>
                    </div>
                </div>
            </div>

        );
    }
}


export default SpinnerMiddle;


