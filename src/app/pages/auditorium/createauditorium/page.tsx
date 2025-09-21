// CreateAuditoriumPage.tsx
"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './CreateAuditoriumPage.css';

interface Auditorium {
  location: string;
  seats: any[];
  campus: string;
  auditoriumType: string;
}

const CreateAuditoriumPage: React.FC = () => {
  const tempseatlayout = [
    {
      // platinum
      type: 'platinum',
      rows: [
        {
          // row 2
          rowname: 'A',
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          rowname: 'B',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'C',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'D',
          cols: [
            // col 1
            {
              seats: [
                {
                  seat_id: '1'
                },
                {
                  seat_id: '2'
                },

                {
                  seat_id: '3'
                },
                {
                  seat_id: '4'
                },
                {
                  seat_id: '5'
                },
                {
                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'E',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'F',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'G',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'H',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'I',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'J',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'K',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'L',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'M',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'N',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'O',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'P',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'Q',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'R',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'S',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'T',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'U',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'V',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'W',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'X',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'Y',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
        {
          // row 2
          rowname: 'Z',
          cols: [
            // col 1
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
            // col 2
            {
              seats: [
                {


                  seat_id: '1'
                },
                {


                  seat_id: '2'
                },

                {


                  seat_id: '3'
                },
                {


                  seat_id: '4'
                },
                {


                  seat_id: '5'
                },
                {

                  seat_id: '6'
                },
                {


                  seat_id: '7'
                },
                {


                  seat_id: '8'
                },
                {


                  seat_id: '9'
                },
                {


                  seat_id: '10'
                }
              ]
            },
          ]
        },
      ],
      price: 500
    },
  ];


  const [auditorium, setAuditorium] = useState<Auditorium>({
    location: '',
    seats: tempseatlayout,
    campus: '',
    auditoriumType: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setAuditorium({ ...auditorium, [name]: value });
  };

  const handleAuditoriumTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAuditorium({ ...auditorium, auditoriumType: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (
        auditorium.location.trim() === '' ||
        auditorium.seats.length === 0 ||
        auditorium.campus.trim() === '' ||
        auditorium.auditoriumType.trim() === ''
      ) {
        toast.error('Please fill all the fields', {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/programme/createauditorium`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(auditorium),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Auditorium creation successful', data);

        toast.success('Auditorium Created Successfully', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        console.error('Auditorium creation failed', response.statusText);
        toast.error('Auditorium Creation Failed', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-auditorium-container">
      <div className="header">
        <h1>Create Auditorium</h1>
        <p>Fill in the details to create a new auditorium</p>
      </div>
      <div className="form-container">
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={auditorium.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Campus:</label>
          <input
            type="text"
            name="campus"
            placeholder="Campus"
            value={auditorium.campus}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Auditorium Type:</label>
          <div className="auditorium-type-options">
            <label>
              <input
                type="radio"
                name="auditoriumType"
                value="Big Auditorium"
                checked={auditorium.auditoriumType === 'Big Auditorium'}
                onChange={handleAuditoriumTypeChange}
              />
              Main Auditorium
            </label>
            <label>
              <input
                type="radio"
                name="auditoriumType"
                value="Classroom"
                checked={auditorium.auditoriumType === 'Classroom'}
                onChange={handleAuditoriumTypeChange}
              />
              Classroom
            </label>
            <label>
              <input
                type="radio"
                name="auditoriumType"
                value="Small Auditorium"
                checked={auditorium.auditoriumType === 'Small Auditorium'}
                onChange={handleAuditoriumTypeChange}
              />
              Small Auditorium
            </label>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleSubmit}>Create Auditorium</button>
      </div>
    </div>
  );
};

export default CreateAuditoriumPage;
