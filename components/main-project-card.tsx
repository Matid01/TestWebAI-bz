"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { GlowButton } from '@/components/ui/glow-button'
import { useTheme } from '@/hooks/use-theme'
import { Shield, FileText, Calculator, BarChart3, ChevronRight, CheckCircle, Clock, TrendingUp } from 'lucide-react'
import type { MainProject } from '@/utils/main-projects-data'

interface MainProjectCardProps {
  project: MainProject
  onSelect: (project: MainProject) => void
}

export function MainProjectCard({ project, onSelect }: MainProjectCardProps) {
  const { isDark } = useTheme()

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="h-8 w-8" />
      case 'FileText':
        return <FileText className="h-8 w-8" />
      case 'Calculator':
        return <Calculator className="h-8 w-8" />
      case 'BarChart3':
        return <BarChart3 className="h-8 w-8" />
      default:
        return <FileText className="h-8 w-8" />
    }
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald':
        return {
          border: 'border-emerald-500/20',
          bg: isDark ? 'bg-emerald-500/10' : 'bg-emerald-50',
          text: 'text-emerald-600',
          icon: 'text-emerald-500',
          accent: 'bg-emerald-500/20'
        }
      case 'blue':
        return {
          border: 'border-blue-500/20',
          bg: isDark ? 'bg-blue-500/10' : 'bg-blue-50',
          text: 'text-blue-600',
          icon: 'text-blue-500',
          accent: 'bg-blue-500/20'
        }
      case 'orange':
        return {
          border: 'border-orange-500/20',
          bg: isDark ? 'bg-orange-500/10' : 'bg-orange-50',
          text: 'text-orange-600',
          icon: 'text-orange-500',
          accent: 'bg-orange-500/20'
        }
      case 'purple':
        return {
          border: 'border-purple-500/20',
          bg: isDark ? 'bg-purple-500/10' : 'bg-purple-50',
          text: 'text-purple-600',
          icon: 'text-purple-500',
          accent: 'bg-purple-500/20'
        }
      default:
        return {
          border: 'border-gray-500/20',
          bg: isDark ? 'bg-gray-500/10' : 'bg-gray-50',
          text: 'text-gray-600',
          icon: 'text-gray-500',
          accent: 'bg-gray-500/20'
        }
    }
  }

  const colorClasses = getColorClasses(project.color)

  return (
    <Card className={`backdrop-blur-sm transition-all duration-300 hover:shadow-xl cursor-pointer group ${
      isDark 
        ? `bg-black/40 ${colorClasses.border} hover:bg-black/60` 
        : `bg-white/80 ${colorClasses.border} hover:bg-white/95`
    }`} onClick={() => onSelect(project)}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-4 rounded-xl ${colorClasses.bg} group-hover:scale-110 transition-transform duration-300`}>
              <div className={colorClasses.icon}>
                {getIcon(project.icon)}
              </div>
            </div>
            <div className="flex-1">
              <CardTitle className={`text-xl font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {project.name}
              </CardTitle>
              <p className={`text-sm mt-2 leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {project.description}
              </p>
            </div>
          </div>
          <ChevronRight className={`h-6 w-6 transition-all duration-300 group-hover:translate-x-1 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`} />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className={`text-2xl font-bold ${colorClasses.text}`}>
              {project.totalSubProjects}
            </div>
            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Sub-proyectos
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">
              {project.completedSubProjects}
            </div>
            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Completados
            </div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${colorClasses.text}`}>
              {project.avgProgress}%
            </div>
            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Progreso
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Progreso General
            </span>
            <span className={`font-semibold ${colorClasses.text}`}>
              {project.avgProgress}%
            </span>
          </div>
          <Progress 
            value={project.avgProgress} 
            className={`h-3 ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}
          />
        </div>

        {/* Status Indicators */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {project.completedSubProjects} completados
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-yellow-500" />
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {project.totalSubProjects - project.completedSubProjects} en progreso
              </span>
            </div>
          </div>
          
          <Badge className={`${colorClasses.accent} ${colorClasses.text} border-0 text-xs`}>
            {project.groups.length} grupos
          </Badge>
        </div>

        {/* Action Button */}
        <GlowButton 
          variant="primary" 
          className="w-full group-hover:scale-105 transition-transform duration-300"
          onClick={(e) => {
            e.stopPropagation()
            onSelect(project)
          }}
        >
          <span>Explorar Sub-proyectos</span>
          <ChevronRight className="h-4 w-4 ml-2" />
        </GlowButton>
      </CardContent>
    </Card>
  )
}
