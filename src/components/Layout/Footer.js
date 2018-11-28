import React from 'react';

const footerData = [
    {
        title: 'hot offers',
        descriptions: 'Vestibulum ante ipsum primis in Faucibus orci luctus et ultrices ' +
        'posuere cubilia curae. Suspendisse sollictudin velit sed leo. Ut ' +
        'pharetra augue nec augue. Nam elit magna, hend',
        points: [
            {
                text: 'Vestibulum ante ipsum primis in Faucibus luctus'
            }, {
                text: 'Nam elit magna hendrerit sit amet tincidunt ac'
            }, {
                text: 'Quisque diam loren interdum vitae dapibus ac scele'
            }, {
                text: 'Donec eget tellus non erat lacinia fermentum'
            }, {
                text: 'Donec in velit vel ipsum auctor pulvin'
            }
        ]
    }, {
        title: 'hot offers',
        descriptions: 'Vestibulum ante ipsum primis in Faucibus orci luctus et ultrices ' +
        'posuere cubilia curae. Suspendisse sollictudin velit sed leo. Ut ' +
        'pharetra augue nec augue. Nam elit magna, hend',
        points: [
            {
                text: 'Vestibulum ante ipsum primis in Faucibus luctus'
            }, {
                text: 'Nam elit magna hendrerit sit amet tincidunt ac'
            }, {
                text: 'Quisque diam loren interdum vitae dapibus ac scele'
            }, {
                text: 'Donec eget tellus non erat lacinia fermentum'
            }, {
                text: 'Donec in velit vel ipsum auctor pulvin'
            },
        ]
    }, {
        title: 'store information',
        points: [
            {
                img: 'map_point',
                text: 'Company inc., 8901 Marmora Road, Glasgow, D04 89GR'
            },
            {
                img: 'phone',
                text: 'Call us now toll Free: (800) 2345-6789'
            },
            {
                img: 'mail',
                text: 'Customer support: support@example.com',
                text_2: 'Press: pressroom@example.com'
            },
            {
                img: 'skype',
                text: 'Skype: sample-username'
            }
        ]
    }
];

const Footer =() => {
    let data = footerData;
    return (
        <div id="footer">
            {data.map( ( block, index ) => (
                <div key={index} className="footer-block">
                    <h2 className="footer-block_title">{block.title}</h2>
                    { block.descriptions ?
                    <p className="footer-block_descriptions">{block.descriptions}</p> :
                    null }
                    {block.points.map(( point, ind ) => (
                        <div key={ind} className="footer-block_point">
                            <div className={`footer-block_point__text ${point.img ? point.img : 'dot'}`}>
                                <div>
                                    <p>{point.text}</p>
                                    {point.text_2 ?
                                    <p>{point.text_2}</p> :
                                    null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
};

export default Footer;
