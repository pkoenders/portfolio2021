import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// Helpers
import { useTable, useSortBy } from 'react-table'

// Page components
import Icon from '/src/components/common/icons/material'

// Layout
import Section from '/src/components/common/layout/pageLayout/'
import styled from 'styled-components'

const LighthouseScoresTable = styled.div`
  .title {
    padding: ${({ theme }) => theme.padding['1/4']};
    text-align: center;
  }
  .tableWrapper {
    border: 1px solid ${({ theme }) => theme.colors.card[500]};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    overflow: hidden;
    max-height: 528px;
    overflow: scroll;
  }

  table {
    width: 100%;

    border-spacing: 0;
    /* position: relative; */

    thead {
      position: sticky;
      z-index: 2;
      top: 0px;
      left: 0px;
      right: 0px;
      background-color: #fff;
    }

    thead:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      /* bottom: -1px; */
      border-bottom: 1px solid ${({ theme }) => theme.colors.card[500]};
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    tr:nth-child(even) {
      background: ${({ theme }) => theme.colors.card[200]};
    }

    th {
      span {
        text-align: left;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* border-radius: ${({ theme }) => theme.borderRadius.sm}; */
        white-space: nowrap;

        i {
          margin: 0 0 0 0;
          width: fit-content;
          position: relative;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: ${({ theme }) => theme.padding['1/4']};
      text-align: center;
      /* border-bottom: 1px solid black; */
      border-right: 1px solid ${({ theme }) => theme.colors.card[400]};
      vertical-align: middle;
      i {
        line-height: inherit;
      }

      :last-child {
        border-right: 0;
      }

      :first-child {
        text-align: left;
        white-space: normal;
      }
    }

    td.green {
      /* color: #fff; */
      background-color: ${({ theme }) => theme.colors.alert.l1[100]};
    }
    tr:nth-child(even) td.green {
      background-color: ${({ theme }) => theme.colors.alert.l1[200]};
    }
    td.red {
      /* color: #fff; */
      background-color: ${({ theme }) => theme.colors.alert.l5[100]};
    }
    tr:nth-child(even) td.red {
      background-color: ${({ theme }) => theme.colors.alert.l5[200]};
    }

    tbody {
    }
  }
`

// Create a default prop getter
const defaultPropGetter = () => ({})

function ReactTable({ columns, data, getCellProps = defaultPropGetter }) {
  // Use the state and functions returned from useTable to build your UI

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <span>
                    {column.render('Header')}

                    {/* Add a sort direction indicator */}

                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <Icon icon={'expand_less'} />
                      ) : (
                        <Icon icon={'expand_more'} />
                      )
                    ) : (
                      <Icon icon={'unfold_more'} />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps([
                        {
                          className: cell.column.className,
                        },

                        getCellProps(cell),
                      ])}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

const LighthouseScores = () => {
  const data = useStaticQuery(graphql`
    query tableQuery {
      allGoogleSpreadsheetLighthouseScores(sort: { order: ASC, fields: name }) {
        totalCount
        edges {
          node {
            url
            name
            secure
            responsive
            pwa
            noErrors
            accessiblity
            seo
            performance
            bestPractice
          }
        }
      }
    }
  `)

  const columns = React.useMemo(
    () => [
      {
        Header: 'URL',
        accessor: 'url', // accessor is the "key" in the data
      },
      {
        Header: 'Secure',
        accessor: 'secure', // accessor is the "key" in the data
        Cell: ({ cell: { value } }) =>
          value === 'TRUE' ? <Icon icon={'done'} /> : <Icon icon={'close'} />,
      },
      {
        Header: 'Responsive',
        accessor: 'responsive',
        Cell: ({ cell: { value } }) =>
          // value === 'TRUE' ? (className) : (className = 'red'),
          value === 'TRUE' ? <Icon icon={'done'} /> : <Icon icon={'close'} />,
      },
      {
        Header: 'PWA',
        accessor: 'pwa',
        Cell: ({ cell: { value } }) =>
          value === 'TRUE' ? <Icon icon={'done'} /> : <Icon icon={'close'} />,
      },

      {
        Header: 'Errors',
        accessor: 'errors',
        Cell: ({ cell: { value } }) =>
          value === 'TRUE' ? <Icon icon={'close'} /> : <Icon icon={'done'} />,
      },
      {
        Header: 'Accessible',
        accessor: 'accessiblity',
      },
      {
        Header: 'SEO',
        accessor: 'seo',
      },

      {
        Header: 'Performance',
        accessor: 'performance',
      },

      {
        Header: 'Best practice',
        accessor: 'bestPractice',
      },
    ],
    []
  )

  var tableData = data.allGoogleSpreadsheetLighthouseScores

  return (
    <Section
      // contentSize={'xl noMarginTop'}
      classOverides={'xl'}
    >
      <LighthouseScoresTable>
        <p className="title">
          A selection of websites in the Manawatu region and their lighthouse scores.
        </p>
        {/* <p className="title">Total count: {tableData.totalCount}</p> */}

        <div className="tableWrapper">
          <ReactTable
            // data={tableData.edges.map((score) => {

            data={tableData.edges
              .filter((row) => row.node.url !== null)
              .filter((row) => row.node.url.includes('http'))
              .filter((row) => row.node.accessiblity !== null)
              .filter((row) => row.node.seo !== null)
              .filter((row) => row.node.bestPactice !== null)
              .map((score) => {
                // if (score.node.url === null) return {}
                // if (score.node.url === null) {
                //   score.remove()
                // }
                return {
                  url: <a href={score.node.url}>{score.node.url}</a>,
                  secure: score.node.secure,
                  responsive: score.node.responsive,
                  pwa: score.node.pwa,
                  errors: score.node.noErrors,
                  accessiblity: score.node.accessiblity + '%',
                  seo: score.node.seo + '%',
                  performance: score.node.performance + '%',
                  bestPractice: score.node.bestPractice + '%',
                }
              })}
            columns={columns}
            minRows={0}
            defaultPageSize={10}
            getCellProps={(cellInfo) => ({
              className:
                (cellInfo.value === 'FALSE' && 'red') || (cellInfo.value === 'TRUE' && 'green'),
            })}
          />
        </div>
      </LighthouseScoresTable>
    </Section>
  )
}

export default LighthouseScores
