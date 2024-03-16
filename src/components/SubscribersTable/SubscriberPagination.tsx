import { Pagination } from 'react-bootstrap';
import '../Schedule.css'

type SubscriberPaginationProps = {
    handlePageChange: (page: number) => void;
    page: number;
    maxPage: number;
};

const SubscriberPagination: React.FC<SubscriberPaginationProps> = ({ handlePageChange, page, maxPage }) => {
    return (
        <Pagination style={{ justifyContent: 'center' }}>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev onClick={() => handlePageChange(page - 1)} />
            {page - 2 > 0 ? <Pagination.Item onClick={() => handlePageChange(page - 2)}>{page-2}</Pagination.Item> : <></>}
            {page - 1 > 0 ? <Pagination.Item onClick={() => handlePageChange(page - 1)}>{page-1}</Pagination.Item> : <></>}
            <Pagination.Item active>{page}</Pagination.Item>
            {page + 1 <= maxPage ? <Pagination.Item onClick={() => handlePageChange(page + 1)}>{page+1}</Pagination.Item> : <></>}
            {page + 2 <= maxPage ? <Pagination.Item onClick={() => handlePageChange(page + 2)}>{page+2}</Pagination.Item> : <></>}
            <Pagination.Next onClick={() => handlePageChange(page + 1)} />
            <Pagination.Last onClick={() => handlePageChange(maxPage)} />
        </Pagination>
    );
}

export default SubscriberPagination;
