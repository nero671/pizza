import React from "react"
import ContentLoader, { IContentLoaderProps } from "react-content-loader"
import {JSX} from "react/jsx-runtime";

const Skeleton = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
    <ContentLoader
        speed={2}
        width={280}
        height={480}
        viewBox="0 0 280 480"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="138" cy="138" r="138" />
        <rect x="0" y="293" rx="0" ry="0" width="280" height="31" />
        <rect x="0" y="351" rx="0" ry="0" width="280" height="74" />
        <rect x="0" y="480" rx="0" ry="0" width="30" height="29" />
        <rect x="0" y="440" rx="5" ry="5" width="98" height="29" />
        <rect x="129" y="436" rx="19" ry="19" width="143" height="35" />
    </ContentLoader>
)

export default Skeleton;
