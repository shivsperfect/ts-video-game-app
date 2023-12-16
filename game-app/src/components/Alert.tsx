import { ReactNode } from "react";

export interface Props {
    children: string;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
    return (
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
        </div>
    )
}

export default Alert