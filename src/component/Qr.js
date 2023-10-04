import React from 'react';

const Qr = ({q, r, id}) => {
    return (
        <div class="accordion accordion-flush m-5" id="accordionFlushExample">
            <div class="accordion-item mb-4">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"+id} aria-expanded="false" aria-controls="flush-collapseOne">
                    <strong>{q}</strong> 
                </button>
                </h2>
                <div id={"flush-collapse"+id} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        {r}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qr;