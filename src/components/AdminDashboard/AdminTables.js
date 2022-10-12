import styled, { css } from "styled-components";

export const TableContainer = styled.div`
    margin: auto;
    text-align: center;
    position: fixed;
    

    table{
        background: #FFFFFF;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
        overflow-y: scroll;
        

        thead{
            height: 33px;
            background: rgba(0, 0, 0, 0.04);

            th{
                padding: 8px 40px 8px 32px;
                font-size: 14px;
                font-weight: 600;
                color: #012A4A;
            }
                    
        }

        tbody{
            position: relative;
            /* overflow-y: scroll; */
            /* max-height: 10px; */
            td{
                font-weight: 400;
                font-size: 14px;
                color: #012A4A;
                padding: 20px 0;
            }
        }
    }

`

export const TableTitle = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    color: #012A4A;
    margin: auto;
    text-align: center;
    padding-top: 32px;
`