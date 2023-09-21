import React, { useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { IconButton } from '@mui/material';

const MatrixTable = () => {
    const numRows = 3;
    const numCols = 7;

    const [matrix, setMatrix] = useState(() => (
        Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => 0))
    ));

    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode(prevMode => !prevMode);
    }

    const handleCellClick = (rowIndex, colIndex) => {
        if (editMode) {
            setMatrix(prevMatrix => {
                const newMatrix = prevMatrix.map(row => [...row]); // Create a copy of the matrix
                newMatrix[rowIndex][colIndex] = newMatrix[rowIndex][colIndex] === 0 ? 1 : 0;
                return newMatrix;
            });
        }
    };

    return (
        <>
            <div className='tableAvail'>
                <div className='hour'>
                    <div>
                        <IconButton onClick={toggleEditMode} style={{ background: '#036EFF', color: '#FFF' }}>
                            <ModeEditIcon fontSize='small' />
                        </IconButton>
                    </div>
                    <div className='h'>AM</div>
                    <div className='h'>PM</div>
                    <div className='h'>EVE</div>
                </div>
                <div className="matrix-table">
                    <div className='days'>
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                    {matrix.map((row, rowIndex) => (
                        <div className="matrix-row" key={rowIndex}>
                            {row.map((element, colIndex) => (
                                <div className={`matrix-cell ${editMode ? 'edit-mode' : ''} ${element ? 'cell-green' : 'cell-red'}`}
                                    key={colIndex}
                                    onClick={() => handleCellClick(rowIndex, colIndex)}
                                >

                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MatrixTable;
