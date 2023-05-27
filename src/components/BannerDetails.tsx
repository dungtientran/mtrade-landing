import * as React from 'react';

export interface IBannerDetailsProps {
    image: string
}

export function BannerDetails({ image }: IBannerDetailsProps) {
    return (
        <React.Fragment>
            {/* <div className={`wrapper bg-[url('${image})] bg-cover bg-center bg-no-repeat`} /> */}

        </React.Fragment>
    );
}
