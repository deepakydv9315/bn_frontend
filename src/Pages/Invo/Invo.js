import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './Invo.scss';

const Invoice = () => {
    const invoiceData = {
        invoiceNumber: '12345',
        invoiceDate: '2022-01-01',
        dueDate: '2022-02-01',
        client: {
            name: 'Client Company',
            address: '5678 Street, City, Country',
        },
        items: [
            { description: 'Product 1', quantity: 2, price: 20 },
            { description: 'Product 2', quantity: 1, price: 30 },
        ],
        subtotal: 70,
        discount: 5,
        total: 65,
    };

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className="invoice-container">
            <div className="invoice" ref={componentRef}>
                <header>
                    <h1>Invoice</h1>
                    <div className="invoice-details">
                        <div>
                            <strong>Invoice Number:</strong> {invoiceData.invoiceNumber}
                        </div>
                        <div>
                            <strong>Invoice Date:</strong> {invoiceData.invoiceDate}
                        </div>
                        <div>
                            <strong>Due Date:</strong> {invoiceData.dueDate}
                        </div>
                    </div>
                </header>
                <section>
                    <div className="client-details">
                        <h2>Client</h2>
                        <div>
                            <strong>Name:</strong> {invoiceData.client.name}
                        </div>
                        <div>
                            <strong>Address:</strong> {invoiceData.client.address}
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoiceData.items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.description}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price}</td>
                                    <td>${item.quantity * item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
                <foot>
                    <div className="subtotal">
                        <strong>Subtotal:</strong> ${invoiceData.subtotal}
                    </div>
                    <div className="discount">
                        <strong>Discount:</strong> ${invoiceData.discount}
                    </div>
                    <div className="total">
                        <strong>Total:</strong> ${invoiceData.total}
                    </div>
                </foot>
            </div>
            <button onClick={handlePrint}>Download PDF</button>
        </div>
    );
};

export default Invoice;
