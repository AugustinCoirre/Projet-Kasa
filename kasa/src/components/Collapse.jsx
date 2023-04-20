import React from 'react';
import '../styles/Collapse.css';

function Collapse() {
    return (
        <div id="component-collapse">
            <details class="accordion">
                <summary class="accordion__title">Accordion title</summary>
                <div class="accordion__content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus sodales, nulla sit amet porttitor rhoncus, lacus
                        ex vestibulum libero, ac mollis neque ante id justo. Nam
                        tempor euismod nisi ac ornare. Pellentesque id sapien
                        lacinia, venenatis est aliquam, dignissim elit.
                        Suspendisse potenti. Cras ut ante in libero tempus
                        sodales sed quis dolor.
                    </p>
                </div>
            </details>
            <details class="accordion">
                <summary class="accordion__title">Accordion title</summary>
                <div class="accordion__content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus sodales, nulla sit amet porttitor rhoncus, lacus
                        ex vestibulum libero, ac mollis neque ante id justo. Nam
                        tempor euismod nisi ac ornare. Pellentesque id sapien
                        lacinia, venenatis est aliquam, dignissim elit.
                        Suspendisse potenti. Cras ut ante in libero tempus
                        sodales sed quis dolor.
                    </p>
                </div>
            </details>
        </div>
    );
}
export default Collapse;
