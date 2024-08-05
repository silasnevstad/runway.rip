'use client'

import React, { useState } from 'react';
import Badge from "@/components/atoms/Badge";
import {Button} from "@/components/atoms/Buttons";
import Tooltip from "@/components/atoms/Tooltip";
import Card from "@/components/molecules/Card";
import Menu from "@/components/molecules/Menu";
import {EnvelopeIcon, HomeIcon, QuestionMarkCircleIcon} from "@heroicons/react/24/outline";
import Dropdown from "@/components/atoms/Dropdown";
import Timeline from "@/components/molecules/Timeline";
import TimelineItem from "@/components/atoms/TimelineItem";
import moment from "moment/moment";
import RadarGraph from "@/components/atoms/RadarGraph";
import LineGraph from "@/components/atoms/LineGraph";
import BarGraph from "@/components/atoms/BarGraph";
import CodeBlock from "@/components/atoms/CodeBlock";
import Checkbox from "@/components/atoms/Checkbox";
import Toggle from "@/components/atoms/Toggle";
import Switcher from "@/components/atoms/Switcher";
import FileDrop from "@/components/atoms/FileDrop";
import FileInput from "@/components/atoms/FileInput";
import Indicator from "@/components/atoms/Indicator";
import {MdNotifications} from "react-icons/md";
import Loader from "@/components/atoms/Loader";

const graphData = {
    labels: ['Strength', 'Skill', 'Speed', 'Stamina', 'Agility', 'Intelligence'],
    datasets: [
        {
            label: 'Player Stats',
            data: [100, 90, 80, 70, 60, 50],
            backgroundColor: '#6366f160',
        }
    ]
};

const Examples = () => {
    const [checkbox, setCheckbox] = useState(true);
    const [toggle, setToggle] = useState(true);
    const [switcher, setSwitcher] = useState('home');
    const [selected, setSelected] = useState(1);

    return (
        <div className="flex flex-col gap-10 items-center place-items-center w-full">
            <CodeBlock
                language="python"
                code={`import pandas as pd

def code:
    print('Hello World')`}
            />
            <div className="grid grid-cols-2 gap-2 ">
                <Button onClick={null} variant="primary" loading>
                    Buttons
                </Button>
                <Button onClick={null} variant="soft">
                    Soft
                </Button>
                <Button onClick={null} variant="danger" shape="rounded-2xl">
                    Delete
                </Button>
                <Button onClick={null} variant="success" shape="rounded-2xl">
                    Success
                </Button>
                <Button onClick={null} variant="primary" shape="rounded-2xl">
                    Rounded
                </Button>
                <Button onClick={null} variant="primary" shape="rounded-2xl" disabled>
                    Disabled
                </Button>
            </div>
            <div className="flex flex-col gap-3">
                <Checkbox
                    label="Checkbox"
                    checked={checkbox}
                    onChange={() => setCheckbox(!checkbox)}
                    hover
                />
                <Checkbox
                    label="Checkbox"
                    checked={checkbox}
                    onChange={() => setCheckbox(!checkbox)}
                    color="text-green-500"
                />
                <Checkbox
                    label="Checkbox"
                    checked={checkbox}
                    onChange={() => setCheckbox(!checkbox)}
                    color="text-yellow-500"
                />
                <Checkbox
                    label="Checkbox"
                    checked={checkbox}
                    onChange={() => setCheckbox(!checkbox)}
                    color="text-red-500"
                    disabled
                />
            </div>
            <div className="flex flex-col gap-3">
                <Toggle
                    label="Toggle"
                    checked={toggle}
                    onChange={() => setToggle(!toggle)}
                />
                <Toggle
                    label="Toggle"
                    checked={toggle}
                    onChange={() => setToggle(!toggle)}
                    color="green"
                />
                <Toggle
                    label="Toggle"
                    checked={toggle}
                    onChange={() => setToggle(!toggle)}
                    color="yellow"
                    icon
                />
                <Toggle
                    label="Toggle"
                    checked={toggle}
                    onChange={() => setToggle(!toggle)}
                    color="red"
                    icon
                />
            </div>
            <div className="flex gap-2">
                <Dropdown
                    label="Select Menu"
                    selectedItemId={selected}
                    items={[
                        {
                            id: 1,
                            // icon: HomeIcon,
                            text: "Home",
                            onClick: () => setSelected(1),
                        },
                        {
                            id: 2,
                            text: "About",
                            onClick: () => setSelected(2),
                        },
                        {
                            id: 3,
                            text: "Contact",
                            onClick: () => setSelected(3),
                        },
                    ]}
                />
            </div>
            <div className="flex gap-2">
                <Switcher
                    options={
                        [
                            {name: 'Home', value: 'home', Icon: HomeIcon},
                            {name: 'Components', value: 'components'},
                            {name: 'Docs', value: 'docs'},
                        ]
                    }
                    selected={switcher}
                    onChange={setSwitcher}
                />
            </div>
            <div className="flex flex-row gap-5 items-center">
                <div className="grid grid-cols-2 gap-2">
                    <Badge shape="pill">
                        Pills
                    </Badge>
                    <Badge shape="square">
                        Squares
                    </Badge>
                    <Badge shape="pill" className="bg-green-100 text-green-800">
                        Soft Pill
                    </Badge>
                    <Badge shape="square" className="bg-red-100 text-red-800">
                        Soft Square
                    </Badge>
                    <Badge shape="pill" className="bg-green-100 text-green-800 border-green-800" border>
                        Borders
                    </Badge>
                    <Badge shape="square" className="bg-red-100 text-red-800 border-red-800" border>
                        Borders
                    </Badge>
                </div>
            </div>
            <div className="flex">
                <RadarGraph
                    data={graphData}
                />
            </div>
            <div className="flex">
                <LineGraph
                    data={graphData}
                />
            </div>
            <div className="flex">
                <BarGraph
                    data={graphData}
                />
            </div>
            <div className="flex gap-2">
                <Tooltip
                    text="Tool tips"
                    position="top"
                >
                    <p className="text-lg font-semibold">Hover me to see tooltip</p>
                </Tooltip>
            </div>
            <div className="flex gap-2 flex-wrap">
                <Card
                    className="whitespace-normal"
                    imageSrc="/logos/google.png"
                    imagePosition="right"
                    hoverEffect="outline"
                >
                    <h2 className="text-2xl font-semibold">Title</h2>
                    <p className="opacity-60 text-lg">Subtitle</p>
                    <div className="flex gap-2 -ml-1 mt-1">
                        <Badge className="text-sm whitespace-nowrap shrink-0">Badge 1</Badge>
                        <Badge className="text-sm whitespace-nowrap shrink-0">Badge 2</Badge>
                    </div>
                    <p className="text-sm opacity-60 mt-5">
                        Apr 2024
                    </p>
                </Card>
            </div>
            <div className="flex gap-2 items-center">
                <Menu
                    className={'min-w-40'}
                    title="Title"
                    menuItems={[
                        {
                            name: 'Home', onClick: null, submenu: [
                                {
                                    name: 'Submenu 1', onClick: null, submenu: [
                                        {name: 'Submenu 1', onClick: null},
                                        {name: 'Submenu 2', onClick: null},
                                    ]
                                },
                                {name: 'Submenu 2', onClick: null},
                            ]
                        },
                        {name: 'About', onClick: null},
                        {name: 'Contact', onClick: null},
                    ]}
                />
                {/*<Menu*/}
                {/*    menuItems={[*/}
                {/*        {name: 'Home', onClick: null, icon: HomeIcon},*/}
                {/*        {name: 'About', onClick: null, icon: QuestionMarkCircleIcon},*/}
                {/*        {name: 'Contact', onClick: null, icon: EnvelopeIcon},*/}
                {/*    ]}*/}
                {/*    horizontal={true}*/}
                {/*/>*/}
                {/*<Menu*/}
                {/*    menuItems={[*/}
                {/*        {name: '', onClick: null, icon: HomeIcon, tooltip: 'Home'},*/}
                {/*        {name: '', onClick: null, icon: QuestionMarkCircleIcon, tooltip: 'About'},*/}
                {/*        {name: '', onClick: null, icon: EnvelopeIcon, tooltip: 'Contact'},*/}
                {/*    ]}*/}
                {/*/>*/}
            </div>
            <div className="flex gap-2">
                <Timeline>
                    <TimelineItem
                        type="dot"
                        date={moment('2023-04-25')}
                    >
                        <p className="ttext-gray-500 dark:text-gray-600">Applied to <a href="#"
                                                                                       className="font-medium text-gray-900 dark:text-gray-200">Front
                            End Developer</a> position.</p>
                        <Badge variant="primary" shape="pill" className="text-sm font-normal">New</Badge>
                    </TimelineItem>
                    <TimelineItem
                        type="icon"
                        content={<HomeIcon className="h-5 w-5 text-gray-800"/>}
                        date={moment('2024-02-25')}
                    >
                        <p className="text-gray-500 dark:text-gray-600">Advanced to phone screening by <a href="#"
                                                                                                          className="font-medium text-gray-900 dark:text-gray-200">Bethany
                            Blake</a></p>
                    </TimelineItem>
                    <TimelineItem
                        type="image"
                        content={{src: "/images/elon-avatar.png", alt: "Elon Avatar"}}
                        date={moment('2024-04-14')}
                    >
                        <p className="text-gray-500 dark:text-gray-600">Completed interview with <a href="#"
                                                                                                    className="font-medium text-gray-900 dark:text-gray-200">Katherine
                            Snyder</a></p>
                    </TimelineItem>
                    <TimelineItem
                        date={moment('2024-04-25')}
                        isLast
                    >
                        <p className="text-gray-500 dark:text-gray-600">Completed interview with <a href="#"
                                                                                                    className="font-medium text-gray-900 dark:text-gray-200">Katherine
                            Snyder</a></p>
                    </TimelineItem>
                </Timeline>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <FileDrop/>
                <FileInput/>
            </div>
            <div className="flex flex-row gap-2 items-center gap-8">
                <Loader type="spinner"/>
                <Loader type="dots"/>
            </div>
        </div>
    );
};

export default Examples;